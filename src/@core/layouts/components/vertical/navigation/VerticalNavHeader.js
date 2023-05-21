// ** Next Import
import Link from 'next/link'

// ** MUI Imports
import Box from '@mui/material/Box'
import { styled, useTheme } from '@mui/material/styles'
import Typography from '@mui/material/Typography'

// ** Configs
import themeConfig from 'src/configs/themeConfig'

// ** Styled Components
const MenuHeaderWrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  paddingRight: theme.spacing(4.5),
  transition: 'padding .25s ease-in-out',
  minHeight: theme.mixins.toolbar.minHeight
}))

const HeaderTitle = styled(Typography)(({ theme }) => ({
  fontWeight: 600,
  lineHeight: 'normal',
  textTransform: 'uppercase',
  color: theme.palette.text.primary,
  transition: 'opacity .25s ease-in-out, margin .25s ease-in-out'
}))

const StyledLink = styled('a')({
  display: 'flex',
  alignItems: 'center',
  textDecoration: 'none'
})

const VerticalNavHeader = props => {
  // ** Props
  const { verticalNavMenuBranding: userVerticalNavMenuBranding } = props

  // ** Hooks
  const theme = useTheme()

  return (
    <MenuHeaderWrapper className='nav-header' sx={{ pl: 6 }}>
      {userVerticalNavMenuBranding ? (
        userVerticalNavMenuBranding(props)
      ) : (
        <Link href='/' passHref>
          <StyledLink>
            <svg width='105' height='61' viewBox='0 0 105 61' fill='none' xmlns='http://www.w3.org/2000/svg'>
              <path
                d='M4.92725 29.984H7.61525V41H4.92725V29.984ZM6.24725 27.92C5.75125 27.92 5.33525 27.752 4.99925 27.416C4.66325 27.08 4.49525 26.664 4.49525 26.168C4.49525 25.72 4.66325 25.336 4.99925 25.016C5.33525 24.696 5.75125 24.536 6.24725 24.536C6.72725 24.536 7.13525 24.696 7.47125 25.016C7.80725 25.336 7.97525 25.72 7.97525 26.168C7.97525 26.664 7.80725 27.08 7.47125 27.416C7.15125 27.752 6.74325 27.92 6.24725 27.92Z'
                fill='black'
              />
              <path
                d='M15.428 41.24C14.468 41.24 13.516 41.072 12.572 40.736C11.628 40.4 10.948 40.024 10.532 39.608L11.804 37.328C12.14 37.632 12.66 37.952 13.364 38.288C14.084 38.608 14.772 38.768 15.428 38.768C16.276 38.768 16.964 38.568 17.492 38.168C18.036 37.768 18.308 37.216 18.308 36.512C18.308 35.968 18.164 35.496 17.876 35.096C17.588 34.696 17.236 34.368 16.82 34.112C16.404 33.84 15.812 33.512 15.044 33.128C14.132 32.68 13.508 32.344 13.172 32.12C11.62 31.08 10.844 29.64 10.844 27.8C10.844 26.28 11.348 25.12 12.356 24.32C13.364 23.504 14.636 23.096 16.172 23.096C17.82 23.096 19.22 23.568 20.372 24.512L19.1 26.696C18.796 26.376 18.364 26.104 17.804 25.88C17.26 25.64 16.676 25.52 16.052 25.52C15.252 25.52 14.62 25.704 14.156 26.072C13.708 26.424 13.484 26.952 13.484 27.656C13.484 28.152 13.628 28.6 13.916 29C14.204 29.384 14.564 29.72 14.996 30.008C15.444 30.296 16.044 30.648 16.796 31.064C17.516 31.464 18.068 31.784 18.452 32.024C18.836 32.248 19.196 32.52 19.532 32.84C19.996 33.256 20.372 33.752 20.66 34.328C20.948 34.904 21.092 35.536 21.092 36.224C21.092 37.296 20.844 38.208 20.348 38.96C19.868 39.712 19.196 40.28 18.332 40.664C17.484 41.048 16.516 41.24 15.428 41.24ZM32.2134 41.24C30.4694 41.24 28.9094 40.84 27.5334 40.04C26.1574 39.24 25.0774 38.144 24.2934 36.752C23.5254 35.344 23.1414 33.768 23.1414 32.024C23.1414 30.328 23.5334 28.8 24.3174 27.44C25.1014 26.08 26.1894 25.016 27.5814 24.248C28.9734 23.48 30.5414 23.096 32.2854 23.096C33.2294 23.096 34.0774 23.184 34.8294 23.36C35.5974 23.52 36.2214 23.712 36.7014 23.936C37.1814 24.144 37.5094 24.328 37.6854 24.488L36.6294 26.744C35.6374 25.944 34.1734 25.544 32.2374 25.544C30.9574 25.544 29.8454 25.824 28.9014 26.384C27.9574 26.944 27.2374 27.704 26.7414 28.664C26.2454 29.624 25.9974 30.696 25.9974 31.88C25.9974 33.224 26.2614 34.424 26.7894 35.48C27.3334 36.536 28.0774 37.36 29.0214 37.952C29.9814 38.528 31.0614 38.816 32.2614 38.816C33.0134 38.816 33.7334 38.728 34.4214 38.552C35.1094 38.36 35.6934 38.064 36.1734 37.664V34.256H32.5494V31.784H38.8374V38.696C38.2614 39.416 37.3894 40.024 36.2214 40.52C35.0694 41 33.7334 41.24 32.2134 41.24Z'
                fill='#2A5F19'
              />
              <rect width='62' height='61' transform='translate(43)' fill='#2A5F19' />
              <path
                d='M54.274 10.71H55.842V21H54.274V10.71ZM56.458 36.14C55.898 36.14 55.3427 36.042 54.792 35.846C54.2413 35.65 53.8447 35.4307 53.602 35.188L54.344 33.858C54.54 34.0353 54.8433 34.222 55.254 34.418C55.674 34.6047 56.0753 34.698 56.458 34.698C56.9527 34.698 57.354 34.5813 57.662 34.348C57.9793 34.1147 58.138 33.7927 58.138 33.382C58.138 33.0647 58.054 32.7893 57.886 32.556C57.718 32.3227 57.5127 32.1313 57.27 31.982C57.0273 31.8233 56.682 31.632 56.234 31.408C55.702 31.1467 55.338 30.9507 55.142 30.82C54.2367 30.2133 53.784 29.3733 53.784 28.3C53.784 27.4133 54.078 26.7367 54.666 26.27C55.254 25.794 55.996 25.556 56.892 25.556C57.8533 25.556 58.67 25.8313 59.342 26.382L58.6 27.656C58.4227 27.4693 58.1707 27.3107 57.844 27.18C57.5267 27.04 57.186 26.97 56.822 26.97C56.3553 26.97 55.9867 27.0773 55.716 27.292C55.4547 27.4973 55.324 27.8053 55.324 28.216C55.324 28.5053 55.408 28.7667 55.576 29C55.744 29.224 55.954 29.42 56.206 29.588C56.4673 29.756 56.8173 29.9613 57.256 30.204C57.676 30.4373 57.998 30.624 58.222 30.764C58.446 30.8947 58.656 31.0533 58.852 31.24C59.1227 31.4827 59.342 31.772 59.51 32.108C59.678 32.444 59.762 32.8127 59.762 33.214C59.762 33.8393 59.6173 34.3713 59.328 34.81C59.048 35.2487 58.656 35.58 58.152 35.804C57.6573 36.028 57.0927 36.14 56.458 36.14ZM65.2135 25.696L70.1695 36H68.3635L67.4815 33.984H62.7635L61.8815 36H60.1315L65.0595 25.696H65.2135ZM64.5135 30.078L63.3935 32.57H66.8655L65.7595 30.092L65.1575 28.678H65.1295L64.5135 30.078ZM68.9498 25.71H70.7278L73.8078 32.78L76.9018 25.71H78.6658L73.9198 36H73.7098L68.9498 25.71ZM79.5214 25.71H84.0294V27.082H81.0754V29.924H83.4554V31.324H81.0754V34.614H84.4914V36H79.5214V25.71ZM58.894 51.14C57.8767 51.14 56.9667 50.9067 56.164 50.44C55.3613 49.9733 54.7313 49.334 54.274 48.522C53.826 47.7007 53.602 46.7813 53.602 45.764C53.602 44.7747 53.8307 43.8833 54.288 43.09C54.7453 42.2967 55.38 41.676 56.192 41.228C57.004 40.78 57.9187 40.556 58.936 40.556C59.4867 40.556 59.9813 40.6073 60.42 40.71C60.868 40.8033 61.232 40.9153 61.512 41.046C61.792 41.1673 61.9833 41.2747 62.086 41.368L61.47 42.684C60.8913 42.2173 60.0373 41.984 58.908 41.984C58.1613 41.984 57.5127 42.1473 56.962 42.474C56.4113 42.8007 55.9913 43.244 55.702 43.804C55.4127 44.364 55.268 44.9893 55.268 45.68C55.268 46.464 55.422 47.164 55.73 47.78C56.0473 48.396 56.4813 48.8767 57.032 49.222C57.592 49.558 58.222 49.726 58.922 49.726C59.3607 49.726 59.7807 49.6747 60.182 49.572C60.5833 49.46 60.924 49.2873 61.204 49.054V47.066H59.09V45.624H62.758V49.656C62.422 50.076 61.9133 50.4307 61.232 50.72C60.56 51 59.7807 51.14 58.894 51.14ZM69.648 51L67.576 47.108C67.1466 47.1267 66.764 47.136 66.428 47.136H66.036V51H64.51V40.71H66.848C68.0333 40.71 69.0086 40.9573 69.774 41.452C70.5393 41.9373 70.922 42.7307 70.922 43.832C70.922 44.5227 70.7586 45.12 70.432 45.624C70.1146 46.1187 69.6386 46.5013 69.004 46.772L71.454 51H69.648ZM67.03 45.862C67.9446 45.862 68.57 45.666 68.906 45.274C69.2513 44.8727 69.424 44.3967 69.424 43.846C69.424 42.6233 68.6073 42.012 66.974 42.012H66.036V45.862H67.03ZM73.0409 40.71H77.5489V42.082H74.5949V44.924H76.9749V46.324H74.5949V49.614H78.0109V51H73.0409V40.71ZM79.576 40.71H84.084V42.082H81.13V44.924H83.51V46.324H81.13V49.614H84.546V51H79.576V40.71ZM87.6512 44.336L87.6932 45.456V51H86.1252V40.696H86.3212L92.3692 47.444L92.3132 46.268V40.71H93.8812V51H93.6712L87.6512 44.336Z'
                fill='white'
              />
            </svg>
          </StyledLink>
        </Link>
      )}
    </MenuHeaderWrapper>
  )
}

export default VerticalNavHeader