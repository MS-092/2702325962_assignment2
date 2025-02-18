function submitRating(profileId, rating) {
    const ratingDisplay = document.getElementById(`rating-display-${profileId}`);
    const ratingCount = document.getElementById(`rating-count-${profileId}`);
    
    let currentRating = parseFloat(ratingDisplay.innerText) || 0;
    let currentCount = parseInt(ratingCount.innerText) || 0;

    // Update the rating
    const newRating = ((currentRating * currentCount) + rating) / (currentCount + 1);
    ratingDisplay.innerText = newRating.toFixed(1);
    ratingCount.innerText = currentCount + 1;
}

document.querySelectorAll('.rating-button').forEach(button => {
    button.addEventListener('click', function() {
        const profileId = this.dataset.profileId;
        const rating = parseInt(this.dataset.rating);
        submitRating(profileId, rating);
    });
});