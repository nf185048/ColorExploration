import React from 'react'
import type { FC } from 'react'
import { Badge, Button, Grid, Item, Typography } from '@ncr-design-system/react'
import * as Theme from '@ncr-design-system/theme-utils'
import './style.css'
import { Cart } from '../assets'

export const SCOInterface: FC<{
  UIPrimary?: Theme.ColorBase
  UISecondary?: Theme.ColorBase
  UIFill?: Theme.ColorBase
  UIBorder?: Theme.ColorBase
  UIText?: Theme.ColorBase
}> = (
  {
    UIPrimary = Theme.generateColor({ main: '#5565FD', type: 'light' }),
    UISecondary = Theme.generateColor({ main: '#008FB2', type: 'light' }),
    UIFill = Theme.generateColor({ main: 'rgba(116, 116, 128, 0.08)', type: 'light' }),
    UIBorder = Theme.generateColor({ main: 'rgba(60, 60, 67, 0.13)', type: 'light' }),
    UIText = Theme.generateColor({ main: '#000000', type: 'light' }),
  }) => {

    const SCOContainer = {
      width: '400px',
      height: '620px',
      display: 'block',
      boxShadow: '0px 3px 3px rgba(0, 0, 0, 0.14), 0px 3px 4px rgba(0, 0, 0, 0.12), 0px 1px 8px rgba(0, 0, 0, 0.2)'
    }

    const SCOHeader = {
      backgroundColor: UIPrimary[20],
      width: '100%',
      height: '80px',
      border: `1px solid ${UIPrimary[20]}`,
      padding: '0.5em 1em 0 1em'
    }

    const shoppingCartList = {
      margin: '1.5em 0',
      color: UIText[90],
    }

    const primaryButton = {
      backgroundColor: UISecondary[50]
    }

    const smallDivider = {
      border: `1px solid ${UIBorder[5]}`,
      width: '80%',
      margin: 'auto'
    }

    const secondaryText = {
      color: UISecondary[50]
    }

    const bigDivider = {
      color: UISecondary[50],
      border: `2px solid ${UIBorder[10]}`,
      margin: 'auto'
    }

    const paymentButton = {
      width: '95%',
      display: 'flex',
      marginTop: '0.25em'
    }


    return (
      <Grid container style={SCOContainer}>

        {/* Header */}
        <Grid container style={SCOHeader} justify='space-between' alignItems='flex-start'>
          <Grid item>
            <Button variant='text'>
              <Cart />
              <Badge style={primaryButton} variant='counter' counter={1}></Badge>
            </Button>
          </Grid>
          <Grid item>
            <Button style={primaryButton}>Edit Cart</Button>
          </Grid>
        </Grid>

        {/* Shopping Cart List */}
        <Item style={shoppingCartList}>
          <Grid container justify='space-between' >
            <Grid item xs={6}>
              <Typography bold noGutter>Carrots</Typography>
              <Typography variant='callout' gutter={6}>1.05 lb @ $0.99/lb</Typography>
              <Typography bold style={secondaryText}>Loyalty Discount</Typography>
            </Grid>
            <Grid item xs={4} />
            <Grid item xs={2}>
              <Typography bold gutter={12}>$1.04</Typography>
              <Typography bold style={secondaryText}>$0.00</Typography>
            </Grid>

            <Grid item xs={12}>
              <div style={smallDivider} />
              <div style={{ paddingBottom: '14em' }} />

            </Grid>


            <Grid item xs={6}>
              <Typography bold style={secondaryText}>Saving</Typography>
            </Grid>
            <Grid item xs={4} />
            <Grid item xs={2}>
              <Typography bold style={secondaryText}>$0.00</Typography>
            </Grid>

            <Grid item xs={12} style={{ padding: '1em 0' }}>
              <div style={smallDivider} />
            </Grid>

            <Grid item xs={6}>
              <Typography bold>TAX @ 8%</Typography>
            </Grid>
            <Grid item xs={4} />
            <Grid item xs={2}>
              <Typography bold >$0.08</Typography>
            </Grid>

            <Grid item xs={12}>
              <div style={bigDivider} />
              <div style={{ paddingBottom: '1em' }} />
            </Grid>

            <Grid item xs={12}>
              <Button style={paymentButton}>
                PAY $1.12
              </Button>
            </Grid>
          </Grid>
        </Item>


      </Grid>
    )
  }
