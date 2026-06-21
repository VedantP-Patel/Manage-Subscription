import React from 'react';
import Head from 'next/head';
import styled from 'styled-components';
import { Container, Section, Button } from '@/styles/components';
import { useRouter } from 'next/router';

const HeroSection = styled(Section)`
  background: linear-gradient(135deg, #0066cc 0%, #0052a3 100%);
  color: white;
  text-align: center;
  padding: 6rem 2rem;

  h1 {
    color: white;
    font-size: 3rem;
    margin-bottom: 1.5rem;
  }

  p {
    font-size: 1.25rem;
    margin-bottom: 2rem;
  }
`;

const HeroButton = styled(Button)`
  background-color: white;
  color: #0066cc;
  font-weight: 700;

  &:hover {
    background-color: #f0f0f0;
  }
`;

const FeatureGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin: 2rem 0;
`;

const FeatureCard = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 8px;
  border-left: 4px solid #0066cc;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);

  h3 {
    color: #0066cc;
    margin-bottom: 1rem;
  }

  p {
    color: #666;
    line-height: 1.6;
  }
`;

export default function Home() {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>TrustVault - Building User Trust: Security, Privacy, and Transparency</title>
        <meta
          name="description"
          content="A secure subscription management platform built on principles of transparency, security, and user privacy."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <HeroSection>
        <Container>
          <h1>Building User Trust</h1>
          <p>Security, Privacy, and Transparency in Subscription Management</p>
          <HeroButton onClick={() => router.push('/auth/register')}>
            Get Started
          </HeroButton>
        </Container>
      </HeroSection>

      <Container>
        <Section>
          <h2>Our Commitment</h2>
          <p>
            TrustVault is built on the principle that trust must be earned, not assumed. We've designed every aspect
            of our platform to prioritize your security, privacy, and complete transparency about how your data is
            handled.
          </p>
        </Section>

        <h2>Core Principles</h2>
        <FeatureGrid>
          <FeatureCard>
            <h3>🔒 No Banking Credentials</h3>
            <p>
              Your banking credentials are never shared with us. We use secure open-banking APIs that give you full
              control over what data we access.
            </p>
          </FeatureCard>

          <FeatureCard>
            <h3>🔐 Zero-Knowledge Architecture</h3>
            <p>
              Sensitive credentials are encrypted on your device. Our servers cannot read them. Decryption happens in
              isolated, temporary environments that are destroyed after use.
            </p>
          </FeatureCard>

          <FeatureCard>
            <h3>👁️ Complete Transparency</h3>
            <p>
              Every action is recorded and displayed in real time. You can review and approve workflows before
              execution. No hidden operations.
            </p>
          </FeatureCard>

          <FeatureCard>
            <h3>🛡️ Security First</h3>
            <p>
              SOC 2 Type II certification, GDPR/CCPA compliance, independent security audits, and bug bounty programs
              ensure ongoing security.
            </p>
          </FeatureCard>

          <FeatureCard>
            <h3>⚙️ Aligned Incentives</h3>
            <p>
              You're our customer, not our product. We don't sell data, build advertising profiles, or share your
              information with third parties.
            </p>
          </FeatureCard>

          <FeatureCard>
            <h3>📈 Gradual Rollout</h3>
            <p>
              Trust is earned incrementally. We start with discovery and analysis, then gradually unlock more powerful
              features as you gain confidence.
            </p>
          </FeatureCard>
        </FeatureGrid>

        <Section style={{ marginTop: '4rem' }}>
          <h2>Ready to Take Control?</h2>
          <p>
            Join thousands of users who've taken control of their subscriptions with confidence. Start for free today.
          </p>
          <Button style={{ marginTop: '1rem' }} onClick={() => router.push('/auth/register')}>
            Create Your Account
          </Button>
        </Section>
      </Container>
    </>
  );
}
