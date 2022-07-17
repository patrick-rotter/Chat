import React from 'react'
import StarOutlinedIcon from '@mui/icons-material/StarOutlined'
import ReplyOutlinedIcon from '@mui/icons-material/ReplyOutlined'
import ReplyAllOutlinedIcon from '@mui/icons-material/ReplyAllOutlined'
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded'
import { ChatMsg } from '../../global/types'
import { useStore } from '../../store'

type Props = {
  msg: ChatMsg
  closeModal: () => void
}

export const ContextModal: React.FC<Props> = (props) => {
  const { addStarredMsg } = useStore()

  return (
    <div className="modal context-modal-container">
      <div
        className="context-modal-text not-selectable"
        onClick={() => {
          addStarredMsg(props.msg)
          props.closeModal()
        }}
      >
        <StarOutlinedIcon />
        &nbsp; Star
      </div>
      <div className="context-modal-text not-selectable">
        <ReplyOutlinedIcon />
        &nbsp; Reply
      </div>
      <div className="context-modal-text not-selectable">
        <ReplyAllOutlinedIcon />
        &nbsp; Forward
      </div>
      <div className="context-modal-text not-selectable">
        <DeleteRoundedIcon />
        &nbsp; Delete
      </div>
    </div>
  )
}
