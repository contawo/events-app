/** @type {import('next').NextConfig} */
const withPWA = require('next-pwa')({
    dest: 'public'
})

const nextConfig = {
    pwa: {
        dest: "/public",
        register: true
    }
}

module.exports = withPWA(nextConfig)
