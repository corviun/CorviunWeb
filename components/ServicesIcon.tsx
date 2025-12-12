import React from 'react';
import { 
  Shield, 
  Eye, 
  Users, 
  Mail, 
  Activity, 
  Database, 
  Server, 
  Cloud, 
  Key,
  ChevronDown,
  ChevronUp
} from 'lucide-react';

interface IconProps {
  name: string;
  className?: string;
}

export const Icon: React.FC<IconProps> = ({ name, className }) => {
  const icons: Record<string, React.ReactNode> = {
    shield: <Shield className={className} />,
    eye: <Eye className={className} />,
    users: <Users className={className} />,
    mail: <Mail className={className} />,
    activity: <Activity className={className} />,
    database: <Database className={className} />,
    server: <Server className={className} />,
    cloud: <Cloud className={className} />,
    key: <Key className={className} />,
    chevronDown: <ChevronDown className={className} />,
    chevronUp: <ChevronUp className={className} />
  };

  return <>{icons[name] || <Shield className={className} />}</>;
};