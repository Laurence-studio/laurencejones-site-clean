#!/usr/bin/env python3
"""
Backend API Testing for Jeff Koons Website
Tests all API endpoints to verify functionality and data integrity
"""

import requests
import json
import sys
from datetime import datetime
from typing import Dict, Any, List

# Use the same backend URL that frontend uses
BACKEND_URL = "https://jones-gallery-dev.preview.emergentagent.com"
BASE_API_URL = f"{BACKEND_URL}/api"

class BackendTester:
    def __init__(self):
        self.test_results = {}
        self.total_tests = 0
        self.passed_tests = 0
        self.failed_tests = 0
        
    def log_test(self, test_name: str, passed: bool, message: str = ""):
        """Log test results"""
        self.total_tests += 1
        if passed:
            self.passed_tests += 1
            status = "✅ PASS"
        else:
            self.failed_tests += 1
            status = "❌ FAIL"
            
        print(f"{status} - {test_name}: {message}")
        self.test_results[test_name] = {
            "passed": passed,
            "message": message,
            "timestamp": datetime.now().isoformat()
        }
    
    def test_api_endpoint(self, endpoint: str, expected_status: int = 200) -> tuple:
        """Test API endpoint and return response"""
        try:
            url = f"{BASE_API_URL}{endpoint}"
            print(f"\n🧪 Testing: {url}")
            response = requests.get(url, timeout=10)
            
            return response.status_code, response.json() if response.status_code == 200 else None, None
            
        except requests.exceptions.RequestException as e:
            return None, None, str(e)
    
    def test_seed_endpoint(self) -> tuple:
        """Test POST /api/seed endpoint"""
        try:
            url = f"{BASE_API_URL}/seed"
            print(f"\n🧪 Testing POST: {url}")
            response = requests.post(url, timeout=10)
            
            return response.status_code, response.json() if response.status_code in [200, 201] else None, None
            
        except requests.exceptions.RequestException as e:
            return None, None, str(e)
    
    def validate_artwork_schema(self, artwork: Dict[str, Any]) -> bool:
        """Validate artwork object schema"""
        required_fields = ['id', 'title', 'image', 'year', 'series', 'medium', 'created_at']
        return all(field in artwork for field in required_fields)
    
    def validate_exhibition_schema(self, exhibition: Dict[str, Any]) -> bool:
        """Validate exhibition object schema"""
        required_fields = ['id', 'title', 'venue', 'date', 'status']
        return all(field in exhibition for field in required_fields)
    
    def validate_biography_schema(self, biography: Dict[str, Any]) -> bool:
        """Validate biography object schema"""
        required_fields = ['id', 'name', 'portrait', 'short_bio', 'birth_info', 'exhibitions', 'recent_exhibitions', 'famous_works', 'awards']
        return all(field in biography for field in required_fields)
    
    def validate_bibliography_schema(self, item: Dict[str, Any]) -> bool:
        """Validate bibliography item schema"""
        required_fields = ['id', 'year', 'title', 'publisher', 'authors']
        return all(field in item for field in required_fields)
    
    def validate_shop_item_schema(self, item: Dict[str, Any]) -> bool:
        """Validate shop item schema"""
        required_fields = ['id', 'name', 'price', 'image', 'category']
        return all(field in item for field in required_fields)
    
    def run_all_tests(self):
        """Execute all backend API tests"""
        print("=" * 60)
        print("🚀 JEFF KOONS WEBSITE - BACKEND API TESTING")
        print("=" * 60)
        print(f"Backend URL: {BACKEND_URL}")
        print(f"API Base URL: {BASE_API_URL}")
        
        # Test 1: Seed Database (run first to ensure data exists)
        print("\n" + "="*50)
        print("1. TESTING SEED ENDPOINT")
        print("="*50)
        
        status_code, response_data, error = self.test_seed_endpoint()
        if error:
            self.log_test("POST /api/seed - Connectivity", False, f"Request failed: {error}")
        elif status_code in [200, 201]:
            self.log_test("POST /api/seed - Status Code", True, f"Returned {status_code}")
            if response_data and 'message' in response_data:
                self.log_test("POST /api/seed - Response Format", True, f"Message: {response_data['message']}")
            else:
                self.log_test("POST /api/seed - Response Format", False, "Missing message field")
        else:
            self.log_test("POST /api/seed - Status Code", False, f"Expected 200/201, got {status_code}")
        
        # Test 2: GET /api/artworks
        print("\n" + "="*50)
        print("2. TESTING ARTWORKS ENDPOINT")
        print("="*50)
        
        status_code, response_data, error = self.test_api_endpoint("/artworks")
        if error:
            self.log_test("GET /api/artworks - Connectivity", False, f"Request failed: {error}")
        elif status_code == 200:
            self.log_test("GET /api/artworks - Status Code", True, "Returned 200")
            
            if isinstance(response_data, list):
                self.log_test("GET /api/artworks - Response Type", True, f"Returned array with {len(response_data)} items")
                
                # Check if we have expected number of artworks
                if len(response_data) == 10:
                    self.log_test("GET /api/artworks - Item Count", True, "Returned 10 artworks as expected")
                else:
                    self.log_test("GET /api/artworks - Item Count", False, f"Expected 10 artworks, got {len(response_data)}")
                
                # Validate schema for first artwork
                if response_data and self.validate_artwork_schema(response_data[0]):
                    self.log_test("GET /api/artworks - Schema Validation", True, "First artwork has required fields")
                else:
                    self.log_test("GET /api/artworks - Schema Validation", False, "Schema validation failed")
                    
            else:
                self.log_test("GET /api/artworks - Response Type", False, f"Expected array, got {type(response_data)}")
        else:
            self.log_test("GET /api/artworks - Status Code", False, f"Expected 200, got {status_code}")
        
        # Test 3: GET /api/exhibitions
        print("\n" + "="*50)
        print("3. TESTING EXHIBITIONS ENDPOINT")
        print("="*50)
        
        status_code, response_data, error = self.test_api_endpoint("/exhibitions")
        if error:
            self.log_test("GET /api/exhibitions - Connectivity", False, f"Request failed: {error}")
        elif status_code == 200:
            self.log_test("GET /api/exhibitions - Status Code", True, "Returned 200")
            
            if isinstance(response_data, list):
                self.log_test("GET /api/exhibitions - Response Type", True, f"Returned array with {len(response_data)} items")
                
                # Check if we have expected number of exhibitions
                if len(response_data) == 4:
                    self.log_test("GET /api/exhibitions - Item Count", True, "Returned 4 exhibitions as expected")
                else:
                    self.log_test("GET /api/exhibitions - Item Count", False, f"Expected 4 exhibitions, got {len(response_data)}")
                
                # Validate schema and status distribution
                if response_data:
                    if self.validate_exhibition_schema(response_data[0]):
                        self.log_test("GET /api/exhibitions - Schema Validation", True, "First exhibition has required fields")
                    else:
                        self.log_test("GET /api/exhibitions - Schema Validation", False, "Schema validation failed")
                    
                    # Count Current vs Past exhibitions
                    current_count = sum(1 for ex in response_data if ex.get('status') == 'Current')
                    past_count = sum(1 for ex in response_data if ex.get('status') == 'Past')
                    
                    if current_count == 1 and past_count == 3:
                        self.log_test("GET /api/exhibitions - Status Distribution", True, "1 Current, 3 Past exhibitions")
                    else:
                        self.log_test("GET /api/exhibitions - Status Distribution", False, f"Expected 1 Current, 3 Past; got {current_count} Current, {past_count} Past")
            else:
                self.log_test("GET /api/exhibitions - Response Type", False, f"Expected array, got {type(response_data)}")
        else:
            self.log_test("GET /api/exhibitions - Status Code", False, f"Expected 200, got {status_code}")
        
        # Test 4: GET /api/biography
        print("\n" + "="*50)
        print("4. TESTING BIOGRAPHY ENDPOINT")
        print("="*50)
        
        status_code, response_data, error = self.test_api_endpoint("/biography")
        if error:
            self.log_test("GET /api/biography - Connectivity", False, f"Request failed: {error}")
        elif status_code == 200:
            self.log_test("GET /api/biography - Status Code", True, "Returned 200")
            
            if isinstance(response_data, dict):
                self.log_test("GET /api/biography - Response Type", True, "Returned single object")
                
                if self.validate_biography_schema(response_data):
                    self.log_test("GET /api/biography - Schema Validation", True, "Biography has required fields")
                    
                    # Check if it's Jeff Koons
                    if response_data.get('name') == 'Jeff Koons':
                        self.log_test("GET /api/biography - Content Validation", True, "Biography is for Jeff Koons")
                    else:
                        self.log_test("GET /api/biography - Content Validation", False, f"Expected Jeff Koons, got {response_data.get('name')}")
                else:
                    self.log_test("GET /api/biography - Schema Validation", False, "Schema validation failed")
            else:
                self.log_test("GET /api/biography - Response Type", False, f"Expected object, got {type(response_data)}")
        else:
            self.log_test("GET /api/biography - Status Code", False, f"Expected 200, got {status_code}")
        
        # Test 5: GET /api/bibliography
        print("\n" + "="*50)
        print("5. TESTING BIBLIOGRAPHY ENDPOINT")
        print("="*50)
        
        status_code, response_data, error = self.test_api_endpoint("/bibliography")
        if error:
            self.log_test("GET /api/bibliography - Connectivity", False, f"Request failed: {error}")
        elif status_code == 200:
            self.log_test("GET /api/bibliography - Status Code", True, "Returned 200")
            
            if isinstance(response_data, list):
                self.log_test("GET /api/bibliography - Response Type", True, f"Returned array with {len(response_data)} items")
                
                # Check if we have expected number of bibliography items
                if len(response_data) == 6:
                    self.log_test("GET /api/bibliography - Item Count", True, "Returned 6 bibliography items as expected")
                else:
                    self.log_test("GET /api/bibliography - Item Count", False, f"Expected 6 items, got {len(response_data)}")
                
                # Validate schema for first item
                if response_data and self.validate_bibliography_schema(response_data[0]):
                    self.log_test("GET /api/bibliography - Schema Validation", True, "First bibliography item has required fields")
                else:
                    self.log_test("GET /api/bibliography - Schema Validation", False, "Schema validation failed")
            else:
                self.log_test("GET /api/bibliography - Response Type", False, f"Expected array, got {type(response_data)}")
        else:
            self.log_test("GET /api/bibliography - Status Code", False, f"Expected 200, got {status_code}")
        
        # Test 6: GET /api/shop
        print("\n" + "="*50)
        print("6. TESTING SHOP ENDPOINT")
        print("="*50)
        
        status_code, response_data, error = self.test_api_endpoint("/shop")
        if error:
            self.log_test("GET /api/shop - Connectivity", False, f"Request failed: {error}")
        elif status_code == 200:
            self.log_test("GET /api/shop - Status Code", True, "Returned 200")
            
            if isinstance(response_data, list):
                self.log_test("GET /api/shop - Response Type", True, f"Returned array with {len(response_data)} items")
                
                # Check if we have expected number of shop items
                if len(response_data) == 4:
                    self.log_test("GET /api/shop - Item Count", True, "Returned 4 shop items as expected")
                else:
                    self.log_test("GET /api/shop - Item Count", False, f"Expected 4 items, got {len(response_data)}")
                
                # Validate schema for first item
                if response_data and self.validate_shop_item_schema(response_data[0]):
                    self.log_test("GET /api/shop - Schema Validation", True, "First shop item has required fields")
                else:
                    self.log_test("GET /api/shop - Schema Validation", False, "Schema validation failed")
            else:
                self.log_test("GET /api/shop - Response Type", False, f"Expected array, got {type(response_data)}")
        else:
            self.log_test("GET /api/shop - Status Code", False, f"Expected 200, got {status_code}")
        
        self.print_summary()
        return self.failed_tests == 0
    
    def print_summary(self):
        """Print test execution summary"""
        print("\n" + "="*60)
        print("📊 TEST EXECUTION SUMMARY")
        print("="*60)
        print(f"Total Tests: {self.total_tests}")
        print(f"✅ Passed: {self.passed_tests}")
        print(f"❌ Failed: {self.failed_tests}")
        print(f"Success Rate: {(self.passed_tests/self.total_tests)*100:.1f}%")
        
        if self.failed_tests > 0:
            print(f"\n⚠️  {self.failed_tests} tests failed. Check the logs above for details.")
        else:
            print(f"\n🎉 All tests passed successfully!")
        
        print("="*60)

if __name__ == "__main__":
    tester = BackendTester()
    success = tester.run_all_tests()
    
    # Exit with appropriate code
    sys.exit(0 if success else 1)