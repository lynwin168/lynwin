export const strapiMediaURL = (url?: string): string => {
  return `${process.env.NEXT_PUBLIC_STRAPI_API_URL}${url}`
}

export const popupWindows = (url: string, title: string): Window | null => {
  const config = `toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width=${500} height=${320}`
  return window.open(url, title, config)
}
