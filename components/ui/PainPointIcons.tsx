import { ICONS } from '@/lib/constants';
import type { PainPoint } from '@/lib/constants';

const SIZE = ICONS.viewBoxSize;
const STROKE = ICONS.strokeColor;
const STROKE_WIDTH = ICONS.strokeWidth;

const commonProps = {
  width: SIZE,
  height: SIZE,
  viewBox: `0 0 ${SIZE} ${SIZE}`,
  fill: 'none',
  stroke: STROKE,
  strokeWidth: STROKE_WIDTH,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
  'aria-hidden': true,
};

function VideoIcon() {
  return (
    <svg {...commonProps}>
      <rect x="1" y="5" width="11" height="10" rx="1.5" />
      <path d="M12 8l6-3v10l-6-3" />
    </svg>
  );
}

function PeopleIcon() {
  return (
    <svg {...commonProps}>
      <circle cx="7" cy="7" r="3" />
      <path d="M1 17c0-3.314 2.686-5 6-5s6 1.686 6 5" />
      <circle cx="14" cy="6" r="2.5" />
      <path d="M17 16c0-2.5-1.5-4-3.5-4.5" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg {...commonProps}>
      <path d="M5.5 2h3l1.5 4-2 1.5a9 9 0 0 0 4.5 4.5L14 10l4 1.5v3A1.5 1.5 0 0 1 16.5 16C8.5 16 4 11.5 4 3.5A1.5 1.5 0 0 1 5.5 2z" />
    </svg>
  );
}

function HouseIcon() {
  return (
    <svg {...commonProps}>
      <path d="M3 9.5L10 3l7 6.5V17a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9.5z" />
      <path d="M7 18v-6h6v6" />
    </svg>
  );
}

const ICON_MAP: Record<PainPoint['iconName'], () => React.JSX.Element> = {
  video: VideoIcon,
  people: PeopleIcon,
  phone: PhoneIcon,
  house: HouseIcon,
};

export default function PainPointIcon({ name }: { name: PainPoint['iconName'] }) {
  const Icon = ICON_MAP[name];
  return <Icon />;
}
