import React from 'react'
import type { FC } from 'react'
import { Button, Card, Grid, Label, Typography } from '@ncr-design-system/react'
import { Settings, Trending, Transfer, Savings } from '../assets'
import { CreditCard, TransactionItem, SavingsItem } from '../components'

export const BankingInterface: FC<{
  primaryFillColor?: string
  secondaryFillColor?: string
  primaryTextColor?: string
  secondaryTextColor?: string
  primaryGraphicsColor?: string
  secondaryGraphicsColor?: string
}> = (
  { primaryFillColor = '',
    secondaryFillColor = '',
    primaryTextColor = '',
    secondaryTextColor = '',
    primaryGraphicsColor = '',
    secondaryGraphicsColor = ''
  }) => {
    const graphicStyle = {
      background: `linear-gradient(${primaryGraphicsColor}, ${secondaryGraphicsColor})`,
      width: '200px',
      height: '125px',
      border: '1px solid #E6E6E7',
      boxShadow: '8px 16px 40px rgba(0, 0, 0, 0.12)',
      marginTop: '1em'
    }

    const iconStyle = {
      textAlign: 'center',
      lineHeight: '.9em',
      width: '40px'
    }

    const cardStyle = {
      backgroundColor: secondaryFillColor,
      padding: '0.5em',
    }

    const container = {
      backgroundColor: primaryFillColor,
      color: primaryTextColor
    }

    return (
      <Grid style={container} container spacing={2} className='sampleContainer'>
        <Grid item xs={12}>
          <Typography variant='title1' italic>Banking Made Simple</Typography>
        </Grid>
        <Grid item xs={4}>
          <Card style={cardStyle}>
            <Grid container justify='space-between'>
              <Label>Balance</Label>
              <Button variant='outline' style={iconStyle}>
                <Settings />
              </Button>
            </Grid>
            <div className="priceTypography">$4,332</div>
            <Grid container justify='center'>
              <CreditCard style={graphicStyle} />
            </Grid>
            <Grid container justify='center' alignItems='stretch' style={{ color: secondaryTextColor, marginTop: '2em' }}>
              <Transfer style={{ paddingRight: '.3em' }} />
              <Typography variant='title3'>Transfers</Typography>
            </Grid>
          </Card>
        </Grid>

        <Grid item xs={4}>
          <Card style={cardStyle}>
            <Grid container justify='space-between'>
              <Label>Card Details</Label>
              <Button variant='outline' style={iconStyle}>
                <Trending />
              </Button>
            </Grid>
            <Grid container justify='center' style={{ transform: 'scale(.8)' }}>
              <CreditCard style={graphicStyle} />
            </Grid>
            <Grid container justify='flex-start'>
              <Typography bold variant='callout'>Recent Transactions</Typography>
            </Grid>
            <Grid container>
              <TransactionItem title='To Lindsay Mathews' subtitle='Transfer' price="$30" icon='cash' />
              <TransactionItem title='Cafe Agora' subtitle='Cafe & Restaurant' price="$35.62" />
              <TransactionItem title="Marlow's Tavern" subtitle='Cafe & Restaurant' price="$101.89" />
            </Grid>
          </Card>
        </Grid>

        <Grid item xs={4}>
          <Card style={cardStyle}>
            <Grid container justify='space-between'>
              <Label>My Savings</Label>
              <Button variant='outline' style={iconStyle}>
                <Savings />
              </Button>
            </Grid>
            <SavingsItem title='Groceries' secondaryFill={secondaryFillColor} icon='cart' />
          </Card>
        </Grid>
      </Grid>
    )
  }
