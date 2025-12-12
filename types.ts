export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: 'shield' | 'lock' | 'eye' | 'server' | 'activity' | 'cloud' | 'mail' | 'database' | 'users' | 'key';
}

export interface ChatMessage {
  role: 'user' | 'model';
  content: string;
}

export interface NavItem {
  label: string;
  href: string;
}
