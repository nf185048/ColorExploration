import React, { } from 'react'
import type { FC } from 'react'
import { Button, Card, Grid, Typography } from '@ncr-design-system/react'
import * as Theme from '@ncr-design-system/theme-utils'
import { NCRShades } from '../types'

export const SCOWelcome: FC<{
  UIPrimary?: Theme.ColorBase
  UIPrimaryShade?: NCRShades
  UISecondary?: Theme.ColorBase
  UISecondaryShade?: NCRShades
  UIFill?: Theme.ColorBase
  UIFillShade?: NCRShades
  UIBorder?: Theme.ColorBase
  UIBorderShade?: NCRShades
  UIText?: Theme.ColorBase
  UITextShade?: NCRShades
}> = (
  {
    UIPrimary = Theme.generateColor({ main: '000', type: 'light' }),
    UISecondary = Theme.generateColor({ main: '000', type: 'light' }),
    UIFill = Theme.generateColor({ main: '000', type: 'light' }),
    UIBorder = Theme.generateColor({ main: '000', type: 'light' }),
    UIText = Theme.generateColor({ main: '000', type: 'light' }),
    UIPrimaryShade = 50,
    UISecondaryShade = 50,
    UIFillShade = 50,
    UIBorderShade = 50,
    UITextShade = 50,
  }) => {

    const SCOContainer = {
      width: '1080px',
      height: '620px',
      padding: '1em 2em',
      backgroundColor: UIFill[UIFillShade],
    }

    const sideBar = {
      borderLeft: `4px solid ${UIPrimary[UIPrimaryShade]}`,
      height: '40px',
      paddingLeft: '1em'
    }

    const primaryCard = {
      backgroundColor: UIPrimary[UIPrimaryShade],
      color: UIText[UIFillShade],
      textAlign: 'center',
      justifyContent: 'center',
      alignContent: 'center',
      display: 'flex',
      flexDirection: 'column'

    }

    const smallPrimaryButtonCard = {
      border: `1px solid ${UIBorder[UIBorderShade]}`,
      backgroundColor: UIFill[UIFillShade],
      color: UIText[UITextShade],
      textAlign: 'center',
      height: '100px',
      minWidth: '90px',
    }

    const secondaryCard = {
      backgroundColor: UISecondary[UISecondaryShade],
      color: UIText[UITextShade],
      textAlign: 'center'
    }

    return (
      <Grid container justify='space-evenly' style={SCOContainer}>
        <Grid item xs={11} style={sideBar}>
          <Typography bold noGutter style={{ color: UIPrimary[UIPrimaryShade] }}>SelfServe™ Checkout</Typography>
          <Typography variant='caption2' style={{ color: UIText[UITextShade] }}>FastLane</Typography>
        </Grid>

        <Grid container justify='center' item xs={12} style={{ textAlign: 'center' }}>
          <Grid item xs={12}>
            <Typography style={{ color: UIText[UITextShade] }} bold variant='largeTitle' noGutter>
              Welcome!
            </Typography>
            <Typography style={{ color: UIText[UITextShade] }}>
              Scan your items, or touch "Start" to begin.
            </Typography>
          </Grid>
        </Grid>

        <Grid container item xs={12} justify='center' spacing={3}>
          <Grid item xs={4}>
            <Card style={{ height: '105px', ...primaryCard }}>
              <Typography variant='title1'>Start</Typography>
            </Card>
          </Grid>
          <Grid item xs={4}>
            <Card style={primaryCard}>
              Use my own bag
            </Card>
            <Card style={primaryCard}>
              Search Item
            </Card>
          </Grid>
        </Grid>

        <Grid container item xs={6} justify='flex-start' spacing={2}>
          <Grid item xs={2} />
          <Grid item xs={8} style={{ color: UIText[UITextShade] }}>
            <Typography bold>Quick start:</Typography>
          </Grid>
          <Grid container justify='space-evenly' spacing={2} alignItems='baseline'>
            <Grid item xs={1}>
              <Button style={{ backgroundColor: UIPrimary[UIPrimaryShade] }}>&#60;</Button>
            </Grid>
            <Grid item xs={2}>
              <Button style={smallPrimaryButtonCard} variant='outline'>
                Fruits
              </Button>
            </Grid>
            <Grid item xs={2}>
              <Button style={smallPrimaryButtonCard} variant='outline'>
                Veggies
              </Button>
            </Grid>
            <Grid item xs={2}>
              <Button style={smallPrimaryButtonCard} variant='outline'>
                Meats
              </Button>
            </Grid>
            <Grid item xs={1}>
              <Button style={{ backgroundColor: UIPrimary[UIPrimaryShade] }}>&#62;</Button>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={6} />

        <Grid container item xs={10} justify='flex-start' alignItems='flex-end' spacing={2}>
          <Grid item xs={2}>
            <Card style={secondaryCard}>
              <Typography variant='caption1'>
                ATTENDANT
              </Typography>
            </Card>
          </Grid>
          <Grid item xs={2}>
            <Card style={secondaryCard}>
              <Typography variant='caption1'>
                ALTERNATE
              </Typography>
            </Card>
          </Grid>
          <Grid item xs={2}>
            <Card style={secondaryCard}>
              <Typography variant='caption1'>
                VOLUME
              </Typography>
            </Card>
          </Grid>
          <Grid item xs={2}>
            <Card style={secondaryCard}>
              <Typography variant='caption1'>
                OWN BAG
              </Typography>
            </Card>
          </Grid>
          <Grid item xs={2}>
            <Card style={secondaryCard}>
              <Typography variant='caption1'>
                VERIFY AGE
              </Typography>
            </Card>
          </Grid>
          <Grid item xs={2}>
            <Card style={secondaryCard}>
              <Typography variant='caption1'>
                ACCESSIBILITY
              </Typography>
            </Card>
          </Grid>
        </Grid>
      </Grid>
    )
  }
