import { Card, Grid, Typography } from "@ncr-design-system/react"
import { FC } from "react"
import { Visa } from "../../assets"

export const CreditCard: FC<{ style: any }> = ({ style = undefined }) => {
  return (
    <Card style={style}>
      <Grid direction='column' container spacing={2} alignItems='flex-end'>
        <Grid item>
          <Typography variant='caption1'>17/24</Typography>
        </Grid>
        <Grid item>
          <Typography variant='title3'>*** 2431</Typography>
        </Grid>
        <Grid item>
          <Visa />
        </Grid>
      </Grid>
    </Card>
  )
}