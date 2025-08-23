/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/services/soft-wash-roof-cleaning',
        destination: '/services/soft-wash-roof-cleaning.html',
        permanent: true
      },
      {
        source: '/services/house-and-building-wash',
        destination: '/services/house-and-building-wash.html',
        permanent: true
      },
      {
        source: '/services/pressure-cleaning-driveways-sidewalks-pavers',
        destination: '/services/pressure-cleaning-driveways-sidewalks-pavers.html',
        permanent: true
      },
      {
        source: '/services/hoa-and-commercial-schedules',
        destination: '/services/hoa-and-commercial-schedules.html',
        permanent: true
      },
      {
        source: '/services/heavy-equipment-and-dumpster-pads',
        destination: '/services/heavy-equipment-and-dumpster-pads.html',
        permanent: true
      }
    ];
  }
};

export default nextConfig;
