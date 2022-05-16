interface ISize {
  width: string;
  height: string;
  circle2Radius: string;
  circleAniLen: string;
  marginLeftAni: string;
}
const sizeSchema = {
  small: {
    width: '26px',
    height: '16px',
    circle2Radius: '12px',
    circleAniLen: '2px',
    marginLeftAni: '10px',
  },
  medium: {
    width: '38px',
    height: '24px',
    circle2Radius: '20px',
    circleAniLen: '3px',
    marginLeftAni: '14px',
  },
  large: {
    width: '50px',
    height: '30px',
    circle2Radius: '26px',
    circleAniLen: '4px',
    marginLeftAni: '20px',
  },
};

export const getSize = (size: 'small' | 'medium' | 'large'): ISize =>
  sizeSchema[size] ? sizeSchema[size] : sizeSchema.medium;
