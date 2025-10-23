import { useNavigate } from 'react-router-dom';
import { RoleInput } from '@/components/role/RoleInput';

export const RoleSelectionPage = () => {
  const navigate = useNavigate();

  const handleRoleSubmit = (role: string) => {
    // Store the role in localStorage
    localStorage.setItem('userRole', role);
    
    // Navigate to home page with role context
    navigate('/', { state: { userRole: role } });
  };

  return (
    <div>
      <RoleInput onNext={handleRoleSubmit} />
    </div>
  );
};
