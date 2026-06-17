module.exports = {
    theme: {
        extend: {
            keyframes: {
                fadeInUp: {
                '0%': { opacity: 0, transform: 'translateY(6px)' },
                '100%': { opacity: 1, transform: 'translateY(0)' },
                },
                fadeIn: {
                '0%': { opacity: 0 },
                '100%': { opacity: 1 },
                },
            },
            animation: {
                fadeInUp: 'fadeInUp 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
                fadeIn: 'fadeIn 0.2s ease-out',
            },
            keyframes: {    
                pulseOnce: {
                    '0%': { boxShadow: '0 0 0 0 rgba(59,130,246,0.4)' },
                    '100%': { boxShadow: '0 0 0 12px rgba(59,130,246,0)' },
                },
                },
            animation: {
                pulseOnce: 'pulseOnce 0.8s ease-out',
            },   
        },
    },
};
