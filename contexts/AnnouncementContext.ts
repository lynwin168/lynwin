import { createContext } from 'react'

interface AnnouncementContextValue {
  announcementTitle?: string
}

export const AnnouncementContext = createContext<AnnouncementContextValue>({
  announcementTitle: undefined
})
