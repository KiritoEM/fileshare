interface InavItems {
  label: string;
  url: string;
}

export default function navbar() {
  const navItems: InavItems[] = [
    { label: "Ajouter un Fichier", url: "/upload-file" },
    { label: "Mes Fichier", url: "/All-file" },
  ];

  return { navItems };
}
