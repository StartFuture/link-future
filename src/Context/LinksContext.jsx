/* eslint-disable react/jsx-no-constructed-context-values */
import {
  createContext, useEffect, useMemo, useState,
} from 'react';

export const LinksContext = createContext();

export const LinkStorage = ({ children }) => {
  // {id, title, url}
  const [customLinks, setCustomLinks] = useState(
    localStorage.getItem('customLinks')
      ? JSON.parse(localStorage.getItem('customLinks'))
      : [],
  );

  // {social, url}
  const [socialLinks, setSocialLinks] = useState(
    localStorage.getItem('socialLinks')
      ? JSON.parse(localStorage.getItem('socialLinks'))
      : [
        { social: 'facebook', url: '' },
        { social: 'instagram', url: '' },
        { social: 'twitter', url: '' },
        { social: 'linkedin', url: '' },
        { social: 'whatsapp', url: '' },
      ],
  );

  const createLink = () => {
    setCustomLinks([...customLinks, { id: Date.now() }]);
  };

  const deleteLink = (id) => {
    setCustomLinks(customLinks.filter((link) => link.id !== id));
  };

  const updateLink = (id, title, url) => {
    setCustomLinks(
      customLinks.map((link) => (link.id === id ? { id, title, url } : link)),
    );
  };

  const updateSocialLink = (social, url) => {
    const newSocialLinks = socialLinks.map((link) => (
      link.social === social ? { social, url } : link
    ));

    setSocialLinks(newSocialLinks);
  };

  useEffect(() => {
    localStorage.setItem('customLinks', JSON.stringify(customLinks));
  }, [customLinks]);

  useEffect(() => {
    localStorage.setItem('socialLinks', JSON.stringify(socialLinks));
  }, [socialLinks]);

  const filteredSocialLinks = useMemo(() => socialLinks.filter(({ url }) => url), [socialLinks]);

  const filteredCustomLinks = useMemo(
    () => customLinks.filter(({ title, url }) => title && url),
    [customLinks],
  );

  return (
    <LinksContext.Provider
      value={{
        socialLinks,
        customLinks,
        filteredSocialLinks,
        filteredCustomLinks,
        createLink,
        deleteLink,
        updateLink,
        updateSocialLink,
      }}
    >
      {children}
    </LinksContext.Provider>
  );
};
