import React, {
  createContext, useCallback, useState, useEffect,
} from 'react';
import PropTypes from 'prop-types';

interface ICompanyContext {
  companyName: string,
  updateCompany(name: string): void
}

export const CompanyContext = createContext<ICompanyContext>({} as ICompanyContext);

export const CompanyProvider: React.FC = ({ children }) => {
  const [companyName, setCompanyName] = useState('');

  useEffect(() => {
    const localCompanyName = localStorage.getItem('companyName');

    if (localCompanyName) {
      setCompanyName(localCompanyName);
    }
  }, []);

  const updateCompany = useCallback((name: string) => {
    localStorage.setItem('companyName', name);

    setCompanyName(name);
  }, []);

  return (
    <CompanyContext.Provider value={{ companyName, updateCompany }}>
      {children}
    </CompanyContext.Provider>
  );
};

CompanyProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
