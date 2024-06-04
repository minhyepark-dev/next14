import { create } from 'zustand'
import { createJSONStorage, devtools, persist } from 'zustand/middleware'
import { ProductProps } from '@/@type/product'

interface UserPersist {
  userId: string
  isLogin: boolean
  setUserId: (userId: string) => void
  setIsLogin: (isLogin: boolean) => void
  setLogout: () => void
  clearUser: () => void
  cart: ProductProps[]
  setCart: (cart: ProductProps[]) => void
}

const userPersist = create(
  devtools(
    persist<UserPersist>(
      (set) => ({
        userId: '',
        isLogin: false,
        setUserId: (userId: string) => set({ userId }),
        setIsLogin: () => set({ isLogin: true }),
        setLogout: () =>
          set({
            userId: '',
            isLogin: false,
          }),
        clearUser: () => set({ userId: '', isLogin: false }),
        cart: [],
        setCart: (cart: ProductProps[]) => set({ cart }),
      }),
      {
        name: 'persist',
        storage: createJSONStorage(() => localStorage),
      },
    ),
  ),
)

export default userPersist
