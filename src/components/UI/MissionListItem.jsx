import React from 'react';
import Button from './Button';

function MissionListItem({ content, onDelete }) {
  return (
    <div>
      {content}
      <Button title="🗑️" onClick={onDelete} />
    </div>
  );
}

export default MissionListItem;
