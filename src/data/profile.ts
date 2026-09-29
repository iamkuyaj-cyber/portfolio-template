/**
 * YOUR IDENTITY - start here.
 *
 * Everything that says who you are lives in this file: name, handle, photo,
 * socials, email and the Home headline. Values still marked TODO are waiting
 * on you.
 *
 * Page-specific copy (projects, services, testimonials, FAQs) lives in the
 * other files in src/data/ and at the top of each view component.
 */

import { CurrencyDollar, TrendUp, Clock, type Icon } from '@/components/slab'

export type SocialLink = {
  label: string
  href: string
  iconPath: string
}

/** A proof fact on the phone's Home: a glyph, a short value, a caption. */
export type Stat = { value: string; label: string; Icon: Icon }

export type Profile = {
  name: string
  /** First name, used in "Hi, I'm ___." on About. */
  firstName: string
  handle: string
  /** Short role line under the handle on phones. */
  role: string
  /** Square image. An SVG, WebP or PNG with a transparent background looks best. */
  avatarSrc: string
  /** Tooltip / screen-reader label on the verified tick next to your name. */
  verifiedLabel: string
  email: string
  location: string
  /** Three short proof facts shown on phones under the Home lede. */
  stats: Stat[]
  displayName: { line1: string; line2: string }
  hero: {
    body: string
    portraitSrc: string
    portraitAlt: string
  }
  socials: SocialLink[]
}

export const profile: Profile = {
  name: 'Jeun Agustero',
  firstName: 'Jeun',
  // TODO: your preferred @handle
  handle: 'TODO',
  role: 'Meta Ads and Creative Strategist',
  // TODO: add your photo to public/ and point avatarSrc and portraitSrc at it
  // (and the preload link in index.html).
  avatarSrc: '/avatar.svg',
  // TODO: what the tick means (e.g. FAMA Elite Season 3), or "Verified"
  verifiedLabel: 'TODO',
  email: 'jgagustero@gmail.com',
  location: 'Davao City, Philippines (GMT+8)',
  // Pick any icon from https://phosphoricons.com and import it above.
  stats: [
    { value: '$3.5M+', label: 'Managed ad spend', Icon: CurrencyDollar },
    { value: '5.9x', label: 'Largest account scale', Icon: TrendUp },
    { value: 'GMT+8', label: 'Davao, PH', Icon: Clock },
  ],
  // The intro types this line, then flies it into the Home headline.
  // Keep it short: two halves, 5-8 words total.
  displayName: { line1: 'Cheap leads are easy.', line2: 'Revenue is the job.' },
  hero: {
    body: 'I turn Meta ad spend into revenue, not just leads and clicks, for service businesses and ecommerce brands.',
    portraitSrc: '/avatar.svg',
    portraitAlt: 'Jeun Agustero',
  },
  socials: [
    // TODO: add your Facebook profile URL, then uncomment this line.
    // { label: 'Facebook profile', href: 'https://www.facebook.com/TODO', iconPath: '/icons/facebook.svg' },
    { label: 'LinkedIn profile', href: 'https://www.linkedin.com/in/jeunagustero', iconPath: '/icons/linkedin.svg' },
  ],
}
