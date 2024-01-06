interface InavItems {
  label: string;
  url: string;
}

export default function navbar() {
  const navItems: InavItems[] = [
    { label: "Ajouter un Fichier", url: "/upload-file" },
    { label: "Tous les fichiers", url: "/All-file" },
  ];

  return { navItems };
}
