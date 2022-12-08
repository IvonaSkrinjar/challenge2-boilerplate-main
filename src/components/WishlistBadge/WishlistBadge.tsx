import React, { memo } from 'react'
import styles from './styles.module.css';
import FavoriteBorderRoundedIcon from '@mui/icons-material/FavoriteBorderRounded';
import { Typography } from '@mui/material';

const WishlistBadge = () => {
  return (
    <FavoriteBorderRoundedIcon /> 
  )
}

export default memo(WishlistBadge)