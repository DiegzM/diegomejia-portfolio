// Container for page content to apply consistent padding and position below topbar
export default function PageContent({ children }: { children: React.ReactNode }) {
    return (
        <div style={{ 
            padding: '5rem 1rem 1rem 1rem', 
            minHeight: '100vh', 
            boxSizing: 'border-box', 
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'flex-start',
        }}>
            {children}
        </div>
    );
}