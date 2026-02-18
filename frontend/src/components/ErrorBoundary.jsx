import React from 'react';

/**
 * Error Boundary - Catches runtime errors and displays fallback UI
 * Prevents white screen crashes in production
 */
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    // Log error for debugging (could send to error tracking service)
    console.error('ErrorBoundary caught an error:', error, errorInfo);
  }

  handleRefresh = () => {
    this.setState({ hasError: false, error: null });
    window.location.reload();
  };

  render() {
    if (this.state.hasError) {
      return (
        <div 
          style={{
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '24px',
            fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
            backgroundColor: '#fff'
          }}
        >
          <p style={{ 
            fontSize: '16px', 
            color: '#666', 
            marginBottom: '24px',
            textAlign: 'center'
          }}>
            Something went wrong loading this page.
          </p>
          <button
            onClick={this.handleRefresh}
            style={{
              padding: '12px 24px',
              fontSize: '14px',
              fontWeight: '500',
              color: '#000',
              backgroundColor: '#fff',
              border: '1px solid #000',
              cursor: 'pointer',
              transition: 'all 0.2s ease'
            }}
            onMouseOver={(e) => {
              e.target.style.backgroundColor = '#000';
              e.target.style.color = '#fff';
            }}
            onMouseOut={(e) => {
              e.target.style.backgroundColor = '#fff';
              e.target.style.color = '#000';
            }}
          >
            Refresh
          </button>
          {/* Show error code in development only */}
          {process.env.NODE_ENV === 'development' && this.state.error && (
            <pre style={{
              marginTop: '24px',
              padding: '12px',
              backgroundColor: '#f5f5f5',
              fontSize: '12px',
              color: '#999',
              maxWidth: '600px',
              overflow: 'auto'
            }}>
              {this.state.error.toString()}
            </pre>
          )}
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
