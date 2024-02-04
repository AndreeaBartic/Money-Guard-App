import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { postAdded } from 'components/postsSlice';
import { selectAllUsers } from './users/usersSlice';
const AddPostForm = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [userId, setUserId] = useState('');
  const dispatch = useDispatch();
  const users = useSelector(selectAllUsers);

  const onTitleChanged = e => setTitle(e.target.value);
  const onContentChange = e => setContent(e.target.value);
  const onAuthorChange = e => setUserId(e.target.value);

  const onSavePostClicked = () => {
    if (title && content) {
      dispatch(postAdded(title, content, userId));

      setTitle('');
      setContent('');
    }
  };
  const canSave = Boolean(title) && Boolean(content) && Boolean(userId);
  const usersOptions = users.map(user => (
    <option key={user.id} value={user.id}>
      {user.name}
    </option>
  ));
  return (
    <div>
      <h2>Add new post</h2>
      <form>
        <label>
          Post Title:
          <input
            type="text"
            id="postTitle"
            name="postTitle"
            value={title}
            onChange={onTitleChanged}
          />
        </label>
        <select
          name=""
          id="postAuthor"
          value={userId}
          onChange={onAuthorChange}
        >
          <option value=""></option>
          {usersOptions}
        </select>
        <label>
          Content:
          <textarea
            type="text"
            id="content"
            name="content"
            value={content}
            onChange={onContentChange}
          />
        </label>
        <button type="button" onClick={onSavePostClicked} disabled={!canSave}>
          Save post
        </button>
      </form>
    </div>
  );
};

export default AddPostForm;
