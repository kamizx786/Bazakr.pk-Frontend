import React from "react";
const Security = () => {
  return (
    <>
      <div class="container mx-auto py-8">
        <h1 class="text-3xl font-serif text-[#248F59] font-bold mb-4">
          Security
        </h1>
        <p class="mb-4">
          At Bazar.pk, we take security seriously to protect your information
          and ensure a safe browsing experience. We have implemented the
          following security measures:
        </p>

        <ol class="list-decimal pl-6 mb-4 font-sans">
          <li class="mb-2">
            Secure Socket Layer (SSL) encryption to protect data transmission
            between your browser and our servers.
          </li>
          <li class="mb-2">
            Regular security audits and vulnerability assessments to identify
            and address potential weaknesses.
          </li>
          <li class="mb-2">
            Strict access controls and authentication mechanisms to prevent
            unauthorized access to our systems.
          </li>
          <li class="mb-2">
            Firewalls and intrusion detection systems to monitor and block
            malicious network traffic.
          </li>
          <li class="mb-2">
            Regular data backups to ensure the availability and integrity of
            your information.
          </li>
          <li class="mb-2">
            Employee training and awareness programs to promote security best
            practices and ensure data protection.
          </li>
          <li class="mb-2">
            Monitoring and logging of system activities to detect and respond to
            security incidents promptly.
          </li>
          <li class="mb-2">
            Compliance with applicable data protection laws and regulations to
            safeguard your privacy.
          </li>
        </ol>

        <p class="mb-4 font-sans">
          While we strive to maintain a secure platform, please note that no
          method of data transmission over the internet or electronic storage is
          100% secure. We encourage you to take precautions, such as using
          strong and unique passwords, and keeping your login credentials
          confidential.
        </p>

        <p class="mb-4 font-sans">
          If you discover any security vulnerabilities or have concerns about
          the security of our platform, please contact us immediately.
        </p>

        <p class="text-gray-500 font-sans text-right">
          Last updated: [25/5/23]
        </p>
      </div>
    </>
  );
};

export default  Security;