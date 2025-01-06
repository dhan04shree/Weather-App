import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import AcUnitTwoToneIcon from '@mui/icons-material/AcUnitTwoTone';
import WbSunnyTwoToneIcon from '@mui/icons-material/WbSunnyTwoTone';
import ThunderstormTwoToneIcon from '@mui/icons-material/ThunderstormTwoTone';
import "./InfoBox.css";
export default function InfoBox({info}){
    const COLD_URL ="https://plus.unsplash.com/premium_photo-1670604649107-a0171e5f1bd0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y29sZCUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D";
    const HOT_URL = "https://media.istockphoto.com/id/471298483/photo/sunny-bright-blue-sky-with-clouds.webp?a=1&b=1&s=612x612&w=0&k=20&c=bQY86z-QGmg8B2N0xp--biH_pqPipNm50d4-yvjTxgg=";
    const RAIN_URL="https://images.unsplash.com/photo-1433863448220-78aaa064ff47?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cmFpbnklMjAlMjB3ZWF0aGVyfGVufDB8fDB8fHww";
    // let info = { 
    //     city : "Pune",     
    // feelsLike: 26.74,
    // humidity: 85,
    // temp: 25.88,
    // tempMax: 25.88,
    // tempMin: 25.88,
    // weather: "overcast clouds",
    // }

    return (
        <div className="InfoBox">
            <div className='cardContainer'>
        
        <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image={info.humidity > 80 ? RAIN_URL : info.temp > 15 ? HOT_URL :COLD_URL }
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        {info.city}&nbsp;&nbsp;
          {info.humidity > 80 ? <ThunderstormTwoToneIcon sx={{marginBottom:"-4px"}} /> : info.temp > 15 ? <WbSunnyTwoToneIcon sx={{marginBottom:"-4px"}}/> : <AcUnitTwoToneIcon sx={{marginBottom:"-4px"}}/> }
          
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }} component="span">
          <p>Temperature = {info.temp}&deg;C</p>
          <p>Humidity = {info.humidity}</p>
          <p>Min Temp = {info.tempMin}&deg;C </p>
          <p>Max Temp = {info.tempMax}&deg;C </p>
          <p>The weather can be describe as  <i>{info.weather}</i> and feels like {info.feelsLike}&deg;C </p>
        </Typography>
      </CardContent>
    
    </Card>  
    </div>
        </div>
    )
}