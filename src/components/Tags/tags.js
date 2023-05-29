const Tag = (selectedTags) => {
    return(
        <div className='container-tags'>
            {selectedTags.selectedTags.map((tag) => (<span className='tag' key={tag}>{tag}</span>))}
        </div>
    )
};

export default Tag;