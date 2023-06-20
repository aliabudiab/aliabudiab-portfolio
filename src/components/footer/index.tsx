import { FC, useState, useEffect } from "react";

const Footer: FC = () => {
  const [currentYear, setCurrentYear] = useState<string | null>(null);

  useEffect(() => {
    if (window) {
      setCurrentYear(new Date().getFullYear().toString());
    }
  }, []);

  return (
    <footer className="w-full">
      <div className="flex justify-center">
        <span className="text-[10px] text-white">
          {currentYear} &copy; Ali Abu Diab. All rights reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
