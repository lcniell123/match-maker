
// Sample array of user objects.
const users: User[] = [
    {
      id: 1,
      name: "User1",
      skillLevel: "advanced",
      behaviour: "helpful",
      communicationPreference: "med",
      toleranceLevel: "med",
      teamworkLevel: "high",
      competitivenessLevel: "med",
      timezone: "EST",
      country: "US",
    },
    {
      id: 2,
      name: "User2",
      skillLevel: "beginner",
      behaviour: "troll",
      communicationPreference: "high",
      toleranceLevel: "low",
      teamworkLevel: "low",
      competitivenessLevel: "very high",
      timezone: "EST",
      country: "US",
    },
    {
      id: 3,
      name: "User3",
      skillLevel: "beginner",
      behaviour: "troll",
      communicationPreference: "med",
      toleranceLevel: "low",
      teamworkLevel: "low",
      competitivenessLevel: "very high",
      timezone: "EST",
      country: "US",
    },
    {
      id: 4,
      name: "User4",
      skillLevel: "beginner",
      behaviour: "helpful",
      communicationPreference: "med",
      toleranceLevel: "low",
      teamworkLevel: "low",
      competitivenessLevel: "high",
      timezone: "EST",
      country: "US",
    },
    {
      id: 5,
      name: "User5",
      skillLevel: "advanced",
      behaviour: "helpful",
      communicationPreference: "high",
      toleranceLevel: "low",
      teamworkLevel: "low",
      competitivenessLevel: "very high",
      timezone: "EST",
      country: "US",
    },
    {
      id: 6,
      name: "User6",
      skillLevel: "beginner",
      behaviour: "helpful",
      communicationPreference: "med",
      toleranceLevel: "med",
      teamworkLevel: "high",
      competitivenessLevel: "very high",
      timezone: "EST",
      country: "US",
    },
    {
      id: 7,
      name: "User7",
      skillLevel: "beginner",
      behaviour: "troll",
      communicationPreference: "high",
      toleranceLevel: "med",
      teamworkLevel: "high",
      competitivenessLevel: "very high",
      timezone: "PST",
      country: "US",
    },
    {
      id: 8,
      name: "User8",
      skillLevel: "advanced",
      behaviour: "helpful",
      communicationPreference: "med",
      toleranceLevel: "low",
      teamworkLevel: "low",
      competitivenessLevel: "med",
      timezone: "PST",
      country: "US",
    },
    {
      id: 9,
      name: "User9",
      skillLevel: "intermediate",
      behaviour: "aggressive",
      communicationPreference: "low",
      toleranceLevel: "high",
      teamworkLevel: "med",
      competitivenessLevel: "extreme",
      timezone: "MST",
      country: "US",
    },
  ];
  
  // Define a type for user objects.
  type User = {
    id: number;
    name: string;
    timezone: string;
    country: string;
    skillLevel: "beginner" | "intermediate" | "advanced";
    behaviour: "friendly" | "competitive" | "team player" | "helpful" | "aggressive" | "troll";
    communicationPreference: "low" | "med" | "high";
    toleranceLevel: "low" | "med" | "high";
    teamworkLevel: "low" | "med" | "high";
    competitivenessLevel: "low" | "med" | "high" | "very high" | "extreme";
  };
  
  
  /**
   * Calculates the number of matching attributes between two users.
   *
   * @param {User} user1 - First user to compare.
   * @param {User} user2 - Second user to compare.
   * @returns {number} The count of matching attributes.
   */
  function calculateMatchScore(user1: User, user2: User): number {
    let score = 0;
    score += user1.skillLevel === user2.skillLevel ? 1 : 0;
    score += user1.behaviour === user2.behaviour ? 1 : 0;
    score += user1.communicationPreference === user2.communicationPreference ? 1 : 0;
    score += user1.toleranceLevel === user2.toleranceLevel ? 1 : 0;
    score += user1.teamworkLevel === user2.teamworkLevel ? 1 : 0;
    score += user1.competitivenessLevel === user2.competitivenessLevel ? 1 : 0;
    score += user1.timezone === user2.timezone ? 1 : 0;
    return score;
  }
  
  /**
   * Groups users based on their similarity, prioritizing groups by the number of matching attributes.
   *
   * @returns {User[][]} A list of user groups.
   */
  function groupUsers(): User[][] {
    let groups: User[][] = [];
    let usedUsers: Set<number> = new Set();
  
    users.forEach((user) => {
      if (!usedUsers.has(user.id)) {
        let group: User[] = [];
        let scores: { user: User; score: number }[] = [];
  
        // Calculate match scores with all other users
        users.forEach((otherUser) => {
          if (user.id !== otherUser.id && !usedUsers.has(otherUser.id)) {
            scores.push({ user: otherUser, score: calculateMatchScore(user, otherUser) });
          }
        });
  
        // Sort other users by descending score
        scores.sort((a, b) => b.score - a.score);
  
        // Form a group up to 5 people including the current user
        group.push(user);
        usedUsers.add(user.id);
  
        scores.forEach(({ user: otherUser }) => {
          if (group.length < 5 && !usedUsers.has(otherUser.id)) {
            group.push(otherUser);
            usedUsers.add(otherUser.id);
          }
        });
  
        if (group.length === 1) {
          // Only the user is in their own group
          groups.push(group.concat(getRandomUsers(users, 4, usedUsers)));
        } else {
          groups.push(group);
        }
      }
    });
  
    // Randomly group any remaining users
    let remainingUsers = users.filter((user) => !usedUsers.has(user.id));
    while (remainingUsers.length) {
      let randomGroup = getRandomUsers(remainingUsers, 5, usedUsers);
      groups.push(randomGroup);
      randomGroup.forEach((user) => usedUsers.add(user.id));
      remainingUsers = remainingUsers.filter((user) => !usedUsers.has(user.id));
    }
  
    return groups;
  }
  
  function getRandomUsers(users: User[], maxGroupSize: number, usedUsers: Set<number>): User[] {
    return users
      .filter((user) => !usedUsers.has(user.id))
      .sort(() => 0.5 - Math.random())
      .slice(0, maxGroupSize);
  }
  
  // Example usage
  const userGroups = groupUsers();
  console.log(userGroups);
  