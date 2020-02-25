import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles({
  root: {
    maxWidth: 600
  }
})

export default function ProjectCard({ name, desc, imageUrl, extLink, ghUrl }) {
  const classes = useStyles()
  return (
    <Card className={classes.root}>
      <CardActionArea>
        <a href={extLink}>
          <CardMedia
            component="img"
            alt="screen shot"
            image={imageUrl}
            title="screen shot"
          />
        </a>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {desc}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        {ghUrl && (
          <Button href={ghUrl} size="small" color="primary">
            Github
          </Button>
        )}
        {extLink && (
          <Button size="small" color="primary">
            Website
          </Button>
        )}
      </CardActions>
    </Card>
  )
}
