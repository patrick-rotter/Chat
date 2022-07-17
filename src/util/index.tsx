import React from 'react'
import InsertPhotoOutlinedIcon from '@mui/icons-material/InsertPhotoOutlined'
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined'
import OndemandVideoOutlinedIcon from '@mui/icons-material/OndemandVideoOutlined'
import BrushOutlinedIcon from '@mui/icons-material/BrushOutlined'
import InsertDriveFileOutlinedIcon from '@mui/icons-material/InsertDriveFileOutlined'

// Converts a number in bytes into a string with a default of 2 decimals
export const formatBytes = (bytes: number, decimals = 2): string => {
  if (bytes === 0) return '0 Bytes'

  const k = 1024
  const dm = decimals < 0 ? 0 : decimals
  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB']

  const i = Math.floor(Math.log(bytes) / Math.log(k))
  const formattedByte = parseFloat((bytes / Math.pow(k, i)).toFixed(dm))

  return `${formattedByte} ${sizes[i]}`
}

// Parses a filetype into a corresponding icon for FilePreview
export const turnFormatIntoIcon = (format: string) => {
  if (format === 'png' || format === 'jpg') return <InsertPhotoOutlinedIcon />
  if (format === 'pdf' || format === 'doc') return <ArticleOutlinedIcon />
  if (format === 'mp4') return <OndemandVideoOutlinedIcon />
  if (format === 'fig' || format === 'indd') return <BrushOutlinedIcon />
  else return <InsertDriveFileOutlinedIcon />
}
