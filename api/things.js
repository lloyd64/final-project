export default async function handler(request, res) {

    const things = [
        {
            "week": "1",
            "time": "2 hours to complete",
            "title": "Introduction",
            "description": "Why take this course?"
            
        },
        {
            "week": "2",
            "time": "2 hours to complete",
            "title": "Misconceptions about happiness",
            "description": "What do we think will make us happy?"

        },
        {
            "week": "3",
            "time": "2 hours to complete",
            "title": "Why our expectations are so bad",
            "description": "Why do we mispredict what makes us happy?"
        }
       
    ];
    res.setHeader('Cache-Control', 'max-age=0, s-maxage=1800');
    res.setHeader("Access-Control-Allow-Credentials", "true");
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET,OPTIONS,PATCH,DELETE,POST,PUT");
    res.setHeader("Access-Control-Allow-Headers", "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version");
    res.json(roster);
  }