import { Button, Grid, InputWrapper } from "@ncr-design-system/react";
import { Eyedrop } from '../assets'
import React, { useState } from "react";
import { NCRShades } from "../types";
import { Colorpicker } from '@ncr-design-system/react'

export const useColorInput = (colorInputPlaceholder: string, shadeInputPlaceholder: string) => {
  const [color, setColor] = useState("")
  const [shade, setShade] = useState<NCRShades>(5)

  const handleClick = (e: any) => {
    if (e.target.color === undefined) return
    console.log(e.target.color)
    setColor(e.target.color)
  }

  const input = (
    <>
      <Grid container justify='center' alignItems='center'>
        <Grid item xs={3}>
          <Colorpicker onClick={(e) => handleClick(e)}>
            {/* <Colorpicker> */}
            <Button variant='outline'>
              <Grid container>
                <Eyedrop />
              </Grid>
            </Button>
          </Colorpicker>
        </Grid>
        <Grid item xs={6}>
          <InputWrapper>
            <input
              value={color}
              onChange={e => setColor(e.target.value)}
              type='text'
              placeholder={colorInputPlaceholder}
            />
          </InputWrapper>
        </Grid>
        <Grid item xs={3}>
          <InputWrapper>
            <input
              id='input'
              value={shade as NCRShades}
              onChange={e => setShade(Number(e.target.value) as NCRShades)}
              type='number'
              min='10'
              max='90'
              placeholder={shadeInputPlaceholder}
              step={10}
            />
          </InputWrapper>
        </Grid>
      </Grid>
    </>
  )
  return [color, shade, input]
}