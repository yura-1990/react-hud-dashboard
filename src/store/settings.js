import { create } from 'zustand'

const useSettingsStore = create((set, get) => ({
    state: {
        toggleMenu: false,
        toggleSearch: false,
        toggleDropDownMenu: [],
        toggleTheme: false,
        themeColor: 'Default',
        themeMode: 'dark'
    },


    handleMenuToggle: () => {
        set({ state: { toggleMenu: !get().state.toggleMenu } })
    },

    handleSearchToggle: () => {
        set({ state: { toggleSearch: !get().state.toggleSearch } })
    },

    handleThemeToggle: () => {
        set({ state: { toggleTheme: !get().state.toggleTheme } })
    },

    handleThemeMode: (mode) => {
        const storedTheme = localStorage.getItem('theme');

        if (!storedTheme) {
            localStorage.setItem('theme', mode);
        }

        set({ state: { themeMode: storedTheme || mode } });

        document.documentElement.setAttribute('data-bs-theme', get().state.themeMode);

    }
}))

export default useSettingsStore;