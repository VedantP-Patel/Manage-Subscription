import React from 'react';
import { Header, Nav, Logo, NavLinks, Footer, FooterContent, FooterBottom } from '@/styles/layout';

export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <>
      <Header>
        <Nav>
          <Logo>TrustVault</Logo>
          <NavLinks>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/security">Security</a></li>
            <li><a href="/dashboard">Dashboard</a></li>
          </NavLinks>
        </Nav>
      </Header>

      <main>{children}</main>

      <Footer>
        <FooterContent>
          <div>
            <h4>About</h4>
            <ul>
              <li><a href="/about">About Us</a></li>
              <li><a href="/blog">Blog</a></li>
              <li><a href="/careers">Careers</a></li>
            </ul>
          </div>
          <div>
            <h4>Security</h4>
            <ul>
              <li><a href="/security">Security Overview</a></li>
              <li><a href="/privacy">Privacy Policy</a></li>
              <li><a href="/terms">Terms of Service</a></li>
            </ul>
          </div>
          <div>
            <h4>Support</h4>
            <ul>
              <li><a href="/help">Help Center</a></li>
              <li><a href="/contact">Contact Us</a></li>
              <li><a href="/feedback">Send Feedback</a></li>
            </ul>
          </div>
        </FooterContent>
        <FooterBottom>
          <p>&copy; 2024 TrustVault. All rights reserved.</p>
          <div>
            <a href="/privacy" style={{ marginRight: '2rem' }}>Privacy</a>
            <a href="/terms">Terms</a>
          </div>
        </FooterBottom>
      </Footer>
    </>
  );
};
