import { Link } from 'react-router-dom'
import { useReveal } from '../hooks/useReveal'
import { images } from '../data/images'
import { Impact } from '../components/Impact'
import { CommunityCTA } from '../components/CommunityCTA'
import './AboutPage.css'

const storyImages = {
  student:
    'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=900&q=80',
  ideas:
    'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80',
  community:
    'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=700&q=80',
  quoteBg:
    'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1600&q=80',
}

const values = [
  {
    title: 'Learning First',
    copy: 'A culture of continuous growth and curiosity.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <circle cx="9" cy="8" r="3" stroke="currentColor" strokeWidth="1.4" />
        <circle cx="16.5" cy="9.5" r="2.4" stroke="currentColor" strokeWidth="1.4" />
        <path d="M3.5 19c.8-3 2.9-4.5 5.5-4.5S13.7 16 14.5 19" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
        <path d="M14.2 14.7c1.3-.7 2.7-.8 4.3.1 1.4.8 2.2 2.2 2.5 4.2" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: 'Innovation',
    copy: 'Turning ideas into real-world impact.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M9.5 18.5c.4 1.1 1.2 1.8 2.5 1.8s2.1-.7 2.5-1.8" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
        <path d="M12 3.5c-3.2 0-5.3 2.1-5.3 5.2 0 2 1 3.4 2.4 4.5.7.5 1.1 1.2 1.2 2h3.4c.1-.8.5-1.5 1.2-2 1.4-1.1 2.4-2.5 2.4-4.5 0-3.1-2.1-5.2-5.3-5.2Z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: 'Collaboration',
    copy: 'Stronger together with peers, industries and institutions.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M8 14c-2.2 0-4 1.3-4 3v2h8v-2c0-1.7-1.8-3-4-3Z" stroke="currentColor" strokeWidth="1.4" />
        <circle cx="8" cy="9" r="2.5" stroke="currentColor" strokeWidth="1.4" />
        <path d="M16 14c2.2 0 4 1.3 4 3v2h-5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
        <circle cx="16" cy="9" r="2.5" stroke="currentColor" strokeWidth="1.4" />
        <path d="M10.5 12.5 13.5 11" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: 'Excellence',
    copy: 'Striving for meaningful and practical outcomes.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M4 19h16" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
        <path d="M6.5 16V10" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
        <path d="M12 16V7" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
        <path d="M17.5 16v-4.5" st