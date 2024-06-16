//::::::linear Search::::::

function findTwoSum(nums, target) {
    const indices = new Map();

    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];

        if (indices.has(complement)) {
            return [indices.get(complement), i];
        }

        indices.set(nums[i], i);
    }

    return [];
}

const numbers = [2, 7, 4, 1, 6];
const target = 5;
console.log("find two sum:", findTwoSum(numbers, target))