export const calculateRewardPoints = (amount) => {
    let rewardPoints = 0;
    if (amount > 100) {
      rewardPoints = (amount - 100) * 2 + 50;
    } else if (amount > 50 ) {
      rewardPoints = amount - 50;
    } 
    return Math.floor(rewardPoints);
  };
