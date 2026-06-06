/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface ServiceItem {
  id: string;
  title: string;
  desc: string;
  details: string[];
  iconName: string;
  badge?: string;
}

export interface WhyItem {
  number: string;
  title: string;
  desc: string;
  subText: string;
}

export interface PortfolioCase {
  id: string;
  industry: string;
  title: string;
  statName: string;
  statBefore: string;
  statAfter: string;
  statGain: string;
  desc: string;
  tags: string[];
}

export interface ReviewItem {
  id: string;
  stars: number;
  text: string;
  author: string;
  bizType: string;
  date: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface Inquiry {
  id: string;
  businessName: string;
  contactName: string;
  phone: string;
  industry: string;
  content: string;
  status: 'pending' | 'diagnosing' | 'completed';
  createdAt: string;
}
