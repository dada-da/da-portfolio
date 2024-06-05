interface IProps {
  icon: string;
  className: string;
}

export const Icons = (props: IProps) => {
  const { icon } = props;

  switch (icon) {
    case 'java':
      return (
        <svg
          id="icon-java"
          fill="currentColor"
          viewBox="0 0 512 512"
          {...props}
        >
          <path d="M193.92 208.37c-4.73-10.46-6.85-22.65-3.24-33.73 3.61-11.33 11.7-20.41 19.8-28.88 22.52-22.53 50.28-39.09 72.31-61.99 12.2-12.57 22.28-27.63 25.76-44.93 2.87-12.7 1.5-25.77-1.11-38.34 11.7 13.32 15.56 32.36 12.2 49.54-3.61 19.3-14.32 36.34-26.9 51.03-10.07 11.83-21.65 22.28-33.72 32-14.07 11.32-27.88 23.52-36.72 39.45-7.47 12.94-9.21 28.88-4.1 42.94 8.33 24.15 27.75 42.07 38.33 64.85a520.6 520.6 0 0 1-33.86-32.36c-11.2-11.95-21.78-24.64-28.75-39.58zm63.48-18.92c-2.12 19.79 8.21 38.46 20.54 53.15 5.97 6.6 11.07 14.69 11.32 23.9.25 12.32-6.72 23.77-15.68 31.86 2.11-.25 3.6-2.12 5.35-3.11 13.44-8.59 26.39-19.42 32.98-34.23a34.53 34.53 0 0 0-2.36-31.37c-6.72-10.95-15.56-20.66-20.79-32.6-2.86-6.73-3.86-14.57-1.5-21.67 3.12-9.58 9.84-17.42 16.94-24.27 19.54-18.54 43.19-31.74 65.84-46.18-28.63 8.22-56.88 19.55-81.03 37.35-15.3 11.45-29.5 27.38-31.61 47.17zm136.05 93.6c13.57.75 26.88 10.7 29.37 24.4 2.37 11.82-3.36 23.52-10.7 32.48-12.08 14.44-28.39 24.78-44.81 33.61-1.62 1-3 2.24-4.24 3.61 21.66-5.48 43.32-13.69 60.87-27.75 9.7-8.1 18.3-18.8 20.16-31.62 1.75-11.08-2.86-22.53-11.07-29.88-9.96-9.09-24.02-12.44-37.22-10.7-7.6 1-15.93 2.61-21.16 8.96 6.23-1.24 12.32-3.73 18.8-3.1zm-270.23 35.6c16.3 4.35 33.1 5.6 49.79 6.72 14.93 1 29.87 1.25 44.93 1.12 38.84-.62 77.92-3.24 116-11.7 3.62-.87 7.6-1.5 10.84-3.73 6.35-4.11 13.31-7.35 20.16-10.58-31 4.97-62.11 9.21-93.48 11.2-31.74 2-63.73 3.24-95.59 1.12-9.09-.87-18.42-1.37-26.89-4.86-1.99-.87-4.73-2.6-3.73-5.22 1.87-3.36 5.6-4.98 8.84-6.72 13.69-6.48 28.62-10.08 43.19-14.32-25.02-.37-49.92 5.97-72.81 15.81-5.11 2.5-10.83 4.48-14.94 8.71-1.62 1.74-1.62 4.74.25 6.23 3.73 3.36 8.7 4.85 13.44 6.22zm201.64 34.23c-21.78 3.86-43.69 7.47-65.72 8.59-24.15 1.62-48.3.25-72.2-2.24-4.6-.63-9.2-1.37-13.31-3.49-2.12-1.24-4.23-3.23-4.1-5.85.24-4.1 3.72-6.97 6.22-9.95-7.72 2.73-15.44 5.6-21.91 10.7-2.74 2.12-5.48 5.48-4.73 9.21 1.12 4.36 5.35 6.97 9.09 8.96 9.2 4.73 19.54 6.85 29.62 8.72 25.51 4.1 51.53 4.23 77.17 2.48 27.14-2.11 54.15-6.6 80.41-14.31-7.47-3.36-14.56-7.22-20.54-12.82zm-136.8 43.07c-6.96 2-14.06 4.36-19.78 8.96-2.87 2.24-5.1 6.1-3.74 9.71 1.75 4.6 6.1 7.35 10.2 9.7 10.72 5.86 22.79 8.6 34.61 10.71 26.77 4.23 54.27 3.61 80.9-1.12 15.82-2.98 31.62-7.22 46.31-13.81a231.7 231.7 0 0 1-27.88-13.7c-15.56 2.74-31.24 5.6-47.18 6.6-21.03 1.62-42.31-.12-63.35-2.73-4.98-1.12-11.2-1.62-14.56-5.98-1.74-3.61 2.24-6.23 4.48-8.34zm170.29 80.03c17.42-3.6 34.97-7.72 50.9-15.8 4.98-2.87 11.08-5.98 12.7-11.95.87-5.73-5.1-8.72-9.34-11.08 2.62 2.99 4.36 7.34 1.74 10.83-4.35 5.85-11.82 8.09-18.42 10.33-20.66 5.85-42.07 8.21-63.35 10.58-56.39 5.1-113.15 6.35-169.53 1.62-18.92-2-38.22-4.11-56.26-10.83-2.86-1.25-7.22-2.5-7.22-6.35 1.12-3.36 4.36-5.23 7.22-6.85 12.94-6.6 27.38-10.2 41.82-11.07-4.23-2.5-9.2-2.74-14.06-2.62-12.08.38-23.9 3.49-35.35 7.35-9.84 3.6-19.92 7.59-27.76 14.81-3.11 2.73-5.97 7.96-2.74 11.7 4.98 5.35 12.7 6.72 19.54 8.34 38.34 6.6 77.17 10.33 116.01 11.7 51.53 1.5 103.43-.75 154.1-10.7zm51.03 6.73c-23.4 7.46-47.67 11.57-71.82 14.93-41.7 5.23-83.77 6.85-125.72 5.6-25.52-.99-51.03-2.73-76.18-6.97 5.85 3.99 13.07 5.23 19.8 7.1 28.25 5.97 57.25 7.1 86 7.96 42.2.75 84.4-.87 125.97-7.46 19.67-3.48 39.46-7.72 57.13-16.93 9.21-4.86 18.55-12.33 20.16-23.15-9.33 9.95-22.77 14.56-35.34 18.92z" />
        </svg>
      );

    case 'javascript':
      return (
        <svg
          id="icon-javascript"
          fill="currentColor"
          viewBox="0 0 50 50"
          {...props}
        >
          <path d="M43.3359 4H6.66797C5.19531 4 4 5.19531 4 6.66797V43.332C4 44.8047 5.19531 46 6.66797 46H43.332C44.8047 46 46 44.8047 46 43.3359V6.66797C46 5.19531 44.8047 4 43.3359 4ZM27 36.1836C27 40.1797 24.6562 42 21.2344 42C18.1406 42 15.9102 39.9258 15 38L18.1445 36.0977C18.75 37.1719 19.6719 38 21 38C22.2695 38 23 37.5039 23 35.5742V23H27V36.1836ZM35.6758 42C32.1328 42 30.1211 40.2148 29 38L32 36C32.8164 37.3359 33.707 38.6133 35.5898 38.6133C37.1719 38.6133 38 37.8242 38 36.7305C38 35.4258 37.1406 34.9609 35.4023 34.1992L34.4492 33.7891C31.6953 32.6172 29.8633 31.1484 29.8633 28.0391C29.8633 25.1797 32.0469 23 35.4531 23C37.8789 23 39.6211 23.8437 40.8789 26.0547L37.9102 27.9648C37.2539 26.7891 36.5508 26.3281 35.4531 26.3281C34.3359 26.3281 33.6289 27.0391 33.6289 27.9648C33.6289 29.1094 34.3359 29.5703 35.9727 30.2812L36.9258 30.6914C40.1719 32.0781 42 33.4961 42 36.6836C42 40.1172 39.3008 42 35.6758 42Z" />
        </svg>
      );

    case 'typescript':
      return (
        <svg
          id="icon-typescript"
          fill="currentColor"
          viewBox="0 0 50 50"
          {...props}
        >
          <path d="M45 4H5C4.447 4 4 4.448 4 5V45C4 45.552 4.447 46 5 46H45C45.553 46 46 45.552 46 45V5C46 4.448 45.553 4 45 4ZM29 26.445H24V42H20V26.445H15V23H29V26.445ZM30.121 41.112V36.954C30.121 36.954 32.392 38.666 35.117 38.666C37.842 38.666 37.737 36.884 37.737 36.64C37.737 34.054 30.016 34.054 30.016 28.325C30.016 20.534 41.266 23.608 41.266 23.608L41.126 27.312C41.126 27.312 39.239 26.054 37.108 26.054C34.977 26.054 34.208 27.067 34.208 28.15C34.208 30.945 41.999 30.666 41.999 36.291C42 44.955 30.121 41.112 30.121 41.112Z" />
        </svg>
      );

    case 'nextjs':
      return (
        <svg id="icon-nextjs" viewBox="0 0 50 50" {...props}>
          <g clipPath="url(#clip0_748_15)">
            <path
              d="M23.3627 0.0134552C23.2551 0.0232289 22.913 0.057437 22.6051 0.0818713C15.5034 0.722051 8.85142 4.55336 4.63832 10.442C2.29228 13.7162 0.791789 17.4303 0.224829 21.3642C0.0244379 22.7374 0 23.143 0 25.0049C0 26.8668 0.0244379 27.2724 0.224829 28.6456C1.58358 38.0333 8.26491 45.9207 17.3265 48.843C18.9492 49.3659 20.6598 49.7227 22.6051 49.9377C23.3627 50.0208 26.6373 50.0208 27.3949 49.9377C30.7527 49.5663 33.5973 48.7355 36.4027 47.3037C36.8328 47.0838 36.9159 47.0251 36.8573 46.9763C36.8182 46.9469 34.9853 44.4888 32.7859 41.5176L28.7879 36.1176L23.7781 28.7043C21.0215 24.6286 18.7537 21.2958 18.7341 21.2958C18.7146 21.2909 18.695 24.5846 18.6852 28.6065C18.6706 35.6485 18.6657 35.9319 18.5777 36.0981C18.4506 36.3375 18.3529 36.4353 18.1476 36.5428C17.9912 36.621 17.8544 36.6356 17.1163 36.6356H16.2708L16.0459 36.4939C15.8993 36.4011 15.7918 36.2789 15.7185 36.1372L15.6158 35.9173L15.6256 26.1191L15.6403 16.316L15.7918 16.1255C15.87 16.0228 16.0362 15.8909 16.1535 15.8274C16.3539 15.7296 16.4321 15.7198 17.2776 15.7198C18.2747 15.7198 18.4409 15.7589 18.6999 16.0424C18.7732 16.1206 21.4858 20.206 24.7312 25.1271C27.9765 30.0481 32.4145 36.7676 34.5943 40.0662L38.5533 46.0624L38.7537 45.9305C40.5279 44.7772 42.4047 43.1352 43.8905 41.4248C47.0528 37.7938 49.0909 33.3663 49.7752 28.6456C49.9756 27.2724 50 26.8668 50 25.0049C50 23.143 49.9756 22.7374 49.7752 21.3642C48.4164 11.9765 41.7351 4.0891 32.6735 1.16676C31.0753 0.648748 29.3744 0.292007 27.4682 0.0769845C26.999 0.0281158 23.7683 -0.0256398 23.3627 0.0134552ZM33.5973 15.1334C33.8319 15.2507 34.0225 15.4755 34.0909 15.7101C34.13 15.8371 34.1398 18.5542 34.13 24.6775L34.1153 33.4641L32.566 31.089L31.0117 28.714V22.3269C31.0117 18.1975 31.0313 15.8762 31.0606 15.7638C31.1388 15.4902 31.3099 15.2751 31.5445 15.1481C31.7449 15.0455 31.8182 15.0357 32.5855 15.0357C33.3089 15.0357 33.436 15.0455 33.5973 15.1334Z"
              fill="currentColor"
            />
          </g>
          <defs>
            <clipPath id="clip0_748_15">
              <rect width="50" height="50" fill="currentColor" />
            </clipPath>
          </defs>
        </svg>
      );

    case 'html':
      return (
        <svg id="icon-html" fill="currentColor" viewBox="0 0 50 50" {...props}>
          <path d="M42.3803 5.555C42.0636 5.20167 41.612 5 41.1386 5H8.86198C8.38865 5 7.93698 5.20167 7.62032 5.555C7.30365 5.90833 7.15365 6.38 7.20532 6.85L10.8753 39.8883C10.9486 40.56 11.4236 41.1217 12.0736 41.3067L24.5403 44.8683C24.6903 44.9117 24.8453 44.9333 24.9986 44.9333C25.152 44.9333 25.307 44.9117 25.457 44.8683L37.9236 41.3067C38.5736 41.1217 39.047 40.56 39.122 39.8883L42.7937 6.85C42.847 6.38 42.697 5.90833 42.3803 5.555ZM34.382 17.3833H19.4986L19.852 21.62H34.0236L32.9603 34.1367L25.0053 36.6667L24.927 36.6417L17.0603 34.1333L16.6303 29.0333H20.4836L20.652 31.015L25.047 31.9833L29.3653 31.0133L29.8236 25.6583H16.3403L15.297 13.3333H34.7286L34.382 17.3833Z" />
        </svg>
      );

    case 'css':
      return (
        <svg id="icon-css" fill="currentColor" viewBox="0 0 50 50" {...props}>
          <path d="M42.3803 5.555C42.0636 5.20167 41.612 5 41.1386 5H8.86198C8.38865 5 7.93698 5.20167 7.62032 5.555C7.30365 5.90833 7.15365 6.38 7.20532 6.85L10.8753 39.8883C10.9486 40.56 11.4236 41.1217 12.0736 41.3067L24.5403 44.8683C24.6903 44.9117 24.8453 44.9333 24.9986 44.9333C25.152 44.9333 25.307 44.9117 25.457 44.8683L37.9236 41.3067C38.5736 41.1217 39.047 40.56 39.122 39.8883L42.7937 6.85C42.847 6.38 42.697 5.90833 42.3803 5.555ZM34.1937 21.79L33.4503 33.9317L25.0536 36.6767L16.657 33.9317L16.3386 28.125H20.5886L20.6953 30.765L25.0536 32.2433L29.412 30.765L29.7303 26.015H20.377L20.1653 21.7917H29.9436L30.262 17.5683H15.5936L15.2753 13.3433H34.7253L34.1937 21.79Z" />
        </svg>
      );

    case 'react':
      return (
        <svg id="icon-react" fill="currentColor" viewBox="0 0 50 50" {...props}>
          <path d="M34.55 3.98a7.1 7.1 0 0 0-2.4.38 16.42 16.42 0 0 0-5.12 3c-.69.56-1.39 1.2-2.08 1.88A31.57 31.57 0 0 0 22.9 7.4a16.4 16.4 0 0 0-5.1-3c-1.64-.52-3.26-.54-4.6.23-1.33.77-2.13 2.19-2.49 3.87a16.4 16.4 0 0 0 .04 5.91c.13.78.3 1.6.51 2.43-.76.23-1.5.47-2.19.74-2.07.8-3.79 1.78-5.04 2.93C2.8 21.66 2 23.06 2 24.59c0 1.54.8 2.94 2.05 4.09a15.98 15.98 0 0 0 5.04 2.93c.73.29 1.53.54 2.35.79-.3 1.1-.53 2.17-.7 3.19a16.4 16.4 0 0 0-.04 5.92c.36 1.68 1.16 3.1 2.5 3.88 1.34.77 2.97.75 4.61.22a16.4 16.4 0 0 0 5.11-3c.68-.55 1.37-1.18 2.07-1.86.7.68 1.39 1.32 2.07 1.88a16.4 16.4 0 0 0 5.1 2.99c1.64.53 3.26.54 4.6-.23 1.33-.77 2.13-2.18 2.49-3.86.35-1.68.31-3.67-.04-5.91-.17-1.02-.4-2.1-.7-3.2.84-.25 1.66-.52 2.42-.81 2.07-.81 3.79-1.78 5.04-2.93C47.2 27.53 48 26.13 48 24.59c0-1.53-.8-2.93-2.05-4.08a15.98 15.98 0 0 0-5.04-2.93 30 30 0 0 0-2.22-.75c.2-.84.38-1.66.5-2.44.37-2.24.4-4.24.05-5.93-.36-1.68-1.16-3.1-2.5-3.87a4.64 4.64 0 0 0-2.2-.6Zm-.09 2.04c.5.01.91.13 1.27.34.71.4 1.24 1.21 1.52 2.53.28 1.32.27 3.1-.06 5.17-.11.71-.28 1.46-.47 2.23a46.4 46.4 0 0 0-6.67-1.07 48.21 48.21 0 0 0-3.68-4.52c.66-.64 1.31-1.24 1.95-1.76a14.68 14.68 0 0 1 4.45-2.64c.64-.2 1.2-.3 1.7-.28Zm-18.97 0a5.1 5.1 0 0 1 1.7.3c1.28.4 2.83 1.3 4.45 2.63.63.5 1.27 1.1 1.9 1.72a48.3 48.3 0 0 0-3.7 4.56c-2.37.22-4.6.59-6.64 1.08-.19-.76-.35-1.51-.46-2.22a14.69 14.69 0 0 1-.06-5.18c.28-1.32.81-2.13 1.53-2.54.36-.21.78-.33 1.28-.34Zm9.49 6.12c.81.89 1.63 1.86 2.43 2.9a57.89 57.89 0 0 0-4.87 0c.8-1.04 1.62-2.01 2.44-2.9Zm.02 4.87c1.36 0 2.69.06 3.97.15a56.86 56.86 0 0 1 4.57 7.8A57.18 57.18 0 0 1 29.52 32a54.25 54.25 0 0 1-9.14-.01 57.13 57.13 0 0 1-3.98-6.96 57.05 57.05 0 0 1 4.58-7.86c1.3-.1 2.64-.15 4.02-.15Zm6.55.4c1.65.2 3.2.5 4.64.83-.43 1.4-.96 2.87-1.6 4.38a60.44 60.44 0 0 0-3.04-5.21Zm-13.2.02a60.05 60.05 0 0 0-3.03 5.18 45 45 0 0 1-1.58-4.35c1.43-.34 2.97-.63 4.6-.83Zm19.81 1.35c.71.21 1.4.43 2.03.68 1.9.75 3.42 1.63 4.4 2.53.98.9 1.4 1.77 1.4 2.6 0 .84-.42 1.7-1.4 2.6-.98.9-2.5 1.8-4.4 2.54-.7.27-1.47.52-2.27.75-.56-1.76-1.3-3.6-2.15-5.46.99-2.15 1.8-4.25 2.4-6.24Zm-26.36 0c.6 1.98 1.4 4.05 2.37 6.18a49.54 49.54 0 0 0-2.17 5.5c-.77-.23-1.51-.47-2.19-.73a14.25 14.25 0 0 1-4.4-2.53c-.98-.9-1.4-1.77-1.4-2.6 0-.84.42-1.7 1.4-2.6.98-.91 2.5-1.8 4.4-2.54.62-.24 1.3-.46 2-.67ZM25 20c-2.75 0-5 2.25-5 5s2.25 5 5 5 5-2.25 5-5-2.25-5-5-5Zm-9.66 7.37a60.45 60.45 0 0 0 2.46 4.31 42.75 42.75 0 0 1-3.82-.7c.38-1.17.84-2.38 1.36-3.61Zm19.28 0c.52 1.24.98 2.45 1.36 3.62-1.2.28-2.48.51-3.83.7a60.96 60.96 0 0 0 2.47-4.32ZM13.4 32.92c1.8.43 3.77.76 5.85.98 1.39 2 2.83 3.81 4.29 5.39-.65.63-1.3 1.23-1.93 1.74a14.67 14.67 0 0 1-4.45 2.64c-1.28.41-2.24.36-2.96-.05-.71-.42-1.24-1.22-1.52-2.54s-.27-3.1.06-5.17c.15-.94.38-1.94.66-2.99Zm23.15.01c.28 1.05.5 2.06.66 3 .33 2.07.34 3.86.06 5.18-.28 1.33-.81 2.14-1.53 2.55-.72.42-1.69.47-2.98.06a14.69 14.69 0 0 1-4.46-2.64 29.44 29.44 0 0 1-1.94-1.76 49.23 49.23 0 0 0 4.32-5.42 46 46 0 0 0 5.87-.97Zm-14.7 1.17a57.41 57.41 0 0 0 6.17 0 46.03 46.03 0 0 1-3.08 3.75 46.17 46.17 0 0 1-3.08-3.75Z" />
        </svg>
      );

    case 'spring':
      return (
        <svg
          id="icon-spring"
          fill="currentColor"
          viewBox="0 0 32 32"
          {...props}
        >
          <path d="M29.1 1.66a14.6 14.6 0 0 1-1.71 3.03c-3.01-3-7.1-4.7-11.35-4.7C7.24 0 0 7.25 0 16.05c0 4.4 1.8 8.6 4.98 11.62l.6.53a16.07 16.07 0 0 0 10.33 3.77 16.1 16.1 0 0 0 16-14.9c.43-4.08-.77-9.25-2.82-15.4zM7.25 27.76a1.38 1.38 0 0 1-2.44-.87 1.38 1.38 0 1 1 2.44.86zm21.77-4.8c-3.96 5.26-12.42 3.49-17.83 3.74 0 0-.97.06-1.93.22l.83-.34c3.8-1.32 5.6-1.57 7.92-2.76 4.35-2.22 8.66-7.06 9.55-12.1-1.66 4.85-6.68 9.01-11.26 10.7-3.14 1.16-8.8 2.29-8.8 2.29l-.23-.12C3.42 22.7 3.3 14.36 10.3 11.66c3.07-1.18 6.01-.53 9.33-1.32 3.54-.84 7.64-3.5 9.3-6.96 1.87 5.54 4.11 14.21.1 19.57z" />
        </svg>
      );

    case 'vue':
      return (
        <svg id="icon-vue" fill="none" viewBox="0 0 24 24" {...props}>
          <path
            fill="currentColor"
            d="M19.11 2H15l-3 4.9L9.43 2H0l12 21L24 2h-4.89ZM3 3.75h2.91L12 14.6l6.09-10.85H21L12 19.5 3 3.75Z"
          />
        </svg>
      );

    case 'jira':
      return (
        <svg id="icon-jira" viewBox="0 0 32 32" {...props}>
          <path
            fill="currentColor"
            d="M29.76 1H15.32c0 3.6 2.92 6.52 6.52 6.52h2.66v2.57c0 3.6 2.9 6.5 6.5 6.51V2.26C31 1.57 30.45 1 29.76 1zm-7.14 7.2H8.17c0 3.6 2.92 6.51 6.52 6.51h2.66v2.58c0 3.6 2.92 6.5 6.52 6.51V9.45c0-.7-.56-1.25-1.25-1.25zm-7.16 7.2H1c0 3.6 2.92 6.5 6.52 6.5h2.68v2.58c0 3.6 2.92 6.51 6.52 6.52V16.65c0-.7-.56-1.26-1.26-1.26z"
          />
        </svg>
      );

    default:
      <></>;
  }
};