function Post ({text,timestamp}) {

    
    return (
      <div className={'post'}>
        <div className='avatar-wrapper'>
          <img src={`avatar.png`} alt='' className='avatar' />
        </div>
  
        <div className='post-content'>
          <p className='post-owner'>
            Allen Kim
            <small className='timestamp'>{timestamp}</small>
          </p>
          <p className='post-text'>{text}</p>
        </div>
      </div>
    );
}
export default Post