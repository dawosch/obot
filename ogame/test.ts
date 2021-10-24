class Test {
  private test = '';

  public init = () => {
    this.test = 'Init';
  };

  public getTest = () => {
    return this.test;
  };
}

export default new Test();
