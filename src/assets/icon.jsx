export default function Icon(props) {
  switch (props.type) {
    case "search":
      return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 26">
          <path fill="currentColor" d="M16.058 9.724a7.029 7.029 0 0 1-7.03 7.029v2a9.029 9.029 0 0 0 9.03-9.03h-2Zm-7.03 7.029A7.029 7.029 0 0 1 2 9.723H0a9.029 9.029 0 0 0 9.029 9.03v-2ZM2 9.723a7.029 7.029 0 0 1 7.029-7.028v-2A9.029 9.029 0 0 0 0 9.724h2Zm7.029-7.028a7.029 7.029 0 0 1 7.029 7.029h2a9.029 9.029 0 0 0-9.03-9.03v2ZM13.64 16.36l8.652 8.652 1.414-1.414-8.652-8.652-1.414 1.414Z"/>
        </svg>
      )
    case "close":
      return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 13">
          <path stroke="currentColor" strokeLinecap="round" strokeMiterlimit="10" d="M13 .5 1.17 12.33 13 .5Zm-.17 11.83L1 .5l11.83 11.83Z"/>
        </svg>
      )
    case "plus":
      return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 12 13">
          <path stroke="currentColor" d="M6 .5v12m-6-6h12"/>
        </svg>
      )
    case "arrow":
      return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 26 26">
          <path stroke="currentColor" strokeWidth="2" d="m12 1 12 12m0 0L12 25m12-12H0"/>
        </svg>
      )
    case "thumbsup":
      return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 25 27">
          <path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M1.702 12.188h3.736c2.34-1.381 2.269-3.108 5.026-5.487 2.758-2.379 3.76-2.57 3.799-3.76.038-1.19.038-1.496.575-1.765.538-.269 2.533 0 2.15 2.993-.385 2.993-4.028 4.66-1.802 6.506.847.701 4.109.516 6.674.516 0 0 1.842-.048 1.842 1.726S21.86 14.53 21.86 14.53m0 0h-4.873m4.873 0c.201.271.927.356.927 1.869 0 1.512-1.567 1.701-2.188 1.728m0 0h-3.756m3.756 0c.334.147 1.002.72 1.002 1.84 0 1.118-1.011 1.509-1.517 1.564m0 0H16.1m3.984 0c.292.237 1.122.641 1.122 1.845s-1 1.625-1.554 1.712c-1.66.143-5.848.171-7.916 0-2.585-.213-3.818-1.138-4.956-1.826-.91-.55-4.298-.837-5.078-.806"/>
        </svg>
      )
    case "thumbsdown":
      return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 27">
          <path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M23 14.113h-3.736c-2.34 1.381-2.269 3.108-5.026 5.487-2.758 2.379-3.76 2.57-3.799 3.76-.038 1.19-.038 1.496-.575 1.765-.538.268-2.533 0-2.15-2.993.384-2.993 4.028-4.66 1.802-6.506-.847-.701-4.109-.516-6.674-.516 0 0-1.842.048-1.842-1.726s1.842-1.612 1.842-1.612m0 0h4.873m-4.873 0c-.201-.272-.927-.356-.927-1.869 0-1.512 1.567-1.702 2.188-1.729m0 0h3.755m-3.755 0C3.77 8.028 3.1 7.455 3.1 6.336c0-1.12 1.012-1.51 1.518-1.565m0 0h3.984m-3.984 0c-.292-.238-1.122-.641-1.122-1.845s1-1.626 1.554-1.713c1.66-.142 5.848-.17 7.916 0 2.584.214 3.818 1.139 4.956 1.826.91.55 4.297.838 5.078.807"/>
        </svg>
      )
    case "info":
      return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 25">
          <circle cx="3.436" cy="12.301" r="2.436" stroke="currentColor" stroke-linecap="round" stroke-width="2"/>
          <circle cx="12" cy="12.301" r="2.436" stroke="currentColor" stroke-linecap="round" stroke-width="2"/>
          <circle cx="20.564" cy="12.301" r="2.436" stroke="currentColor" stroke-linecap="round" stroke-width="2"/>
        </svg>
      )
    case "pin":
      return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M12 11.424a2.878 2.878 0 1 0 0-5.756 2.878 2.878 0 0 0 0 5.756Zm0 0v2.23M12 1.5c-3.886 0-7.043 3.138-7.043 7 0 7 7.043 14 7.043 14s7.042-7 7.042-14c0-3.862-3.157-7-7.042-7Z"/>
        </svg>
      )
  }
}