// Question:
// Contest Advancement
// Given scores of N participants and an integer K,
// count how many participants advance to the next round.
// A participant advances if their score is
// >= score of the K-th participant and the score is positive.

let n=8;
let k=5;
let arr=[10, 9, 8, 7, 7, 7, 5, 5]

let NextRoundParticipants=0;
	for(let i=0;i<arr.length;i++)
	{
		if(arr[i]>=arr[k-1] && arr[i]>0)
		{
   NextRoundParticipants++;
		}
	}
	console.log(NextRoundParticipants)

