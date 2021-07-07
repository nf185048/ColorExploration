import { Grid, Button, Typography } from "@ncr-design-system/react"
import React, { FC } from "react"
import { Cart, Cash } from "../../assets"
import './TransactionItem.css'

export const TransactionItem: FC<{
  title: string,
  subtitle: string,
  price: string
  icon?: 'cart' | 'cash'
}> = ({
  title = 'title',
  subtitle = 'subtitle',
  price = "",
  icon = 'cart'
}) => {

    return (
      <Grid item className='transactionItem'>
        <Grid container alignItems='center' spacing={4}>
          <Grid item xs={2}>
            <Button variant='outline' style={{ transform: "scale(0.6)" }}>
              {(icon === 'cart') && (<Cart style={{ paddingTop: '.3em' }} />)}
              {(icon === 'cash') && (<Cash style={{ paddingTop: '.3em', transform: 'scale(1.5)' }} />)}

            </Button>
          </Grid>

          <Grid item xs={7}>
            <div className='transactionTitle'>{title}</div>
            <div className='transactionSubTitle'>{subtitle}</div>
          </Grid>

          <Grid item xs={1}>
            <Typography variant='callout'>{price}</Typography>
          </Grid>
        </Grid>
      </Grid>
    )
  }