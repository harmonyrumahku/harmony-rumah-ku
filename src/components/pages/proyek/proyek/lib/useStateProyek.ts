"use client";

import { useState, useEffect, useRef } from "react";
import { ProyekHome } from "@/types/Proyek";

export function useStateProyek(projectData: ProyekHome[]) {
  // State management
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [loadingMessage, setLoadingMessage] = useState(
    "Memuat halaman proyek..."
  );
  const [search, setSearch] = useState("");
  const [selectedKategori, setSelectedKategori] = useState("");
  const [openKategori, setOpenKategori] = useState(false);
  const [selectedLayanan, setSelectedLayanan] = useState("");
  const [openLayanan, setOpenLayanan] = useState(false);
  const [selectedWilayah, setSelectedWilayah] = useState("");
  const [openWilayah, setOpenWilayah] = useState(false);
  const [isInSection, setIsInSection] = useState(false);

  // Refs
  const scrollRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);

  // Handlers
  const handleLinkClick = (projectTitle: string) => {
    setLoadingMessage(`Memuat detail untuk "${projectTitle}"...`);
    setIsLoading(true);
  };

  // Computed values
  const kategoriOptions = Array.from(new Set(projectData.map((p) => p.type)));
  const layananOptions = Array.from(
    new Set(projectData.map((p) => p.layanan).filter(Boolean))
  );
  const wilayahOptions = Array.from(
    new Set(projectData.map((p) => p.city).filter(Boolean))
  );

  // Filter logic
  const filteredProjects = projectData.filter((project) => {
    const searchLower = search.toLowerCase();
    const matchSearch =
      searchLower === "" ||
      project.title.toLowerCase().includes(searchLower) ||
      project.city.toLowerCase().includes(searchLower) ||
      (project.layanan && project.layanan.toLowerCase().includes(searchLower));

    const matchKategori = selectedKategori
      ? project.type === selectedKategori
      : true;
    const matchLayanan = selectedLayanan
      ? project.layanan === selectedLayanan
      : true;
    const matchWilayah = selectedWilayah
      ? project.city === selectedWilayah
      : true;

    return matchSearch && matchKategori && matchLayanan && matchWilayah;
  });

  // Filter handlers
  const handleKategoriToggle = () => {
    setOpenKategori(!openKategori);
    setOpenLayanan(false);
    setOpenWilayah(false);
  };

  const handleLayananToggle = () => {
    setOpenLayanan(!openLayanan);
    setOpenKategori(false);
    setOpenWilayah(false);
  };

  const handleWilayahToggle = () => {
    setOpenWilayah(!openWilayah);
    setOpenKategori(false);
    setOpenLayanan(false);
  };

  const handleKategoriSelect = (kategori: string) => {
    setSelectedKategori(kategori);
    setOpenKategori(false);
  };

  const handleLayananSelect = (layanan: string) => {
    setSelectedLayanan(layanan);
    setOpenLayanan(false);
  };

  const handleWilayahSelect = (wilayah: string) => {
    setSelectedWilayah(wilayah);
    setOpenWilayah(false);
  };

  const clearAllFilters = () => {
    setSearch("");
    setSelectedKategori("");
    setSelectedLayanan("");
    setSelectedWilayah("");
  };

  // Scroll effects
  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      const isVisible = rect.top < windowHeight && rect.bottom > 0;
      setIsInSection(isVisible);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check initial position

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const onWheel = (e: WheelEvent) => {
      // Deteksi scroll dari touchpad (biasanya deltaY lebih kecil dan lebih halus)
      const isTouchpadScroll = Math.abs(e.deltaY) < 100;

      if (e.deltaY !== 0) {
        if (!isInSection) {
          return;
        }

        // Cek apakah sudah mencapai ujung bawah atau atas
        const isAtBottom =
          el.scrollTop + el.clientHeight >= el.scrollHeight - 1;
        const isAtTop = el.scrollTop <= 1;

        // Jika scroll ke bawah dan sudah di ujung bawah, biarkan scroll vertikal normal
        if (e.deltaY > 0 && isAtBottom) {
          return;
        }

        // Jika scroll ke atas dan sudah di ujung atas, biarkan scroll vertikal normal
        if (e.deltaY < 0 && isAtTop) {
          return;
        }

        // Jika belum di ujung, lakukan scroll vertikal yang smooth
        e.preventDefault();
        e.stopPropagation();

        // Kurangi kecepatan scroll sedikit lagi untuk kontrol yang lebih halus
        const scrollSpeed = isTouchpadScroll ? 0.6 : 1.0;
        const newScrollTop = el.scrollTop + e.deltaY * scrollSpeed;

        el.scrollTop = newScrollTop;
      }
    };
    el.addEventListener("wheel", onWheel, { passive: false });
    return () => {
      el.removeEventListener("wheel", onWheel);
    };
  }, [isInSection]);

  return {
    // State
    hoveredIdx,
    setHoveredIdx,
    isLoading,
    loadingMessage,
    search,
    setSearch,
    selectedKategori,
    selectedLayanan,
    selectedWilayah,
    openKategori,
    openLayanan,
    openWilayah,
    isInSection,

    // Refs
    scrollRef,
    sectionRef,

    // Computed values
    kategoriOptions,
    layananOptions,
    wilayahOptions,
    filteredProjects,

    // Handlers
    handleLinkClick,
    handleKategoriToggle,
    handleLayananToggle,
    handleWilayahToggle,
    handleKategoriSelect,
    handleLayananSelect,
    handleWilayahSelect,
    clearAllFilters,
  };
}
