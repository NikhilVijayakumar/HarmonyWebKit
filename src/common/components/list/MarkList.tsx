//path src\common\components\list\MarksList.tsx
import React from 'react'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'

import { MarksListProps } from './MarkListData'

export const MarksList: React.FC<MarksListProps> = ({
  data,
  calculatePercentage,
}) => {
  return (
    <List>
      {data.map((item, index) => (
        <ListItem key={index}>
          <ListItemText
            primary={`Chapter: ${item.chapterName}`}
            secondary={`Score: ${item.correctAnswers} / ${
              item.totalQuestions
            } = ${calculatePercentage(
              item.correctAnswers,
              item.totalQuestions,
            )} % `}
          />
        </ListItem>
      ))}
    </List>
  )
}
